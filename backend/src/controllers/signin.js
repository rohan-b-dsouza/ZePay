import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcrypt";

export const signin = async (req, res)=> {
    const {email, password} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if (!existingUser) {
            return res.status(400).json({
                message: "Email doesn't exist"
            });
        }
        const hashedPassword = existingUser.password;
        const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Password entered is incorrect"
            });
        }
        const userId = existingUser._id;
        const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "1h"});
        return res.status(200).json({
            message: "Login successful",
            token
        });
    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}