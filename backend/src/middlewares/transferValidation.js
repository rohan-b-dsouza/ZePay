import zod from 'zod'
import mongoose from 'mongoose';

export const transferValidation = (req, res, next)=> {
    const transferSchema = zod.object({
        toUserId : zod.string().trim().refine((id)=> mongoose.Types.ObjectId.isValid(id), { message: "Invalid User Id"}),
        amount: zod.number().positive()
    });
    const result = transferSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            message: result.error.issues[0].message
        });
    }
    next();
}