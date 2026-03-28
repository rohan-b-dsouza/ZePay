import User from "../models/User.js"
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import Account from "../models/Account.js";

export const signup = async (req, res)=> {
    const {email, password, firstName, lastName} = req.body;
    try {   
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(409).json({
                errors: {
                    email: "Email already exists"
                }
            });
        }   
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            email, 
            password: hashedPassword,
            firstName,
            lastName
        })
        const userId = user._id;
        const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "1h"});
        const account = await Account.create({
            userId,
            balance: Math.round(1 + Math.random() * 1000000)
        });
        return res.status(201).json({
            message: "User created successfully",
            token  
        })
    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        }) ;
    }
}

