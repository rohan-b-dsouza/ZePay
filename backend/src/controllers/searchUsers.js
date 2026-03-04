import User from "../models/User.js";

export const searchUsers = async (req, res)=> {
    const filter = req.query.filter?.trim();
    if (!filter) {
        return res.status(200).json({
            users: []
        });
    }
    try {
        const users = await User.find(
            {
                _id: {$ne: req.userId},
                $or: [
                    {firstName: {$regex: "^" + filter, $options: "i"}},
                    {lastName: {$regex: "^" + filter, $options: "i"}}
                ]
            }
        ).select("email firstName lastName _id")
        res.status(200).json({users});
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}
