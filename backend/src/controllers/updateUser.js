import User from "../models/User.js";
import bcrypt from 'bcrypt';
export const updateUser = async (req, res)=> {
    const body = req.body;
    if (Object.keys(body).length === 0) return res.status(400).json({
        message: "No fields provided to update"
    })
    const userId = req.userId;
    try {
        if (body.password) {
            const hashedPassword = await bcrypt.hash(body.password, 10);
            body.password = hashedPassword;
        }
        const user = await User.updateOne(
            { _id : userId },
            { $set: body }
        );
        if (!user.matchedCount) return res.status(404).json({
            message: "User not found"
        })
        return res.status(200).json({
            message: "Updated successfully"
        });
    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}