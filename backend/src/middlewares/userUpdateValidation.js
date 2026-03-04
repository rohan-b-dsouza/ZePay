import zod from 'zod'
export const userUpdateValidation = (req, res, next)=> {
    const userUpdateSchema = zod.object({
        password: zod.string().min(6).optional(),
        firstName: zod.string().max(50).trim().optional(),
        lastName: zod.string().trim().optional()
    });
    const result = userUpdateSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            message: result.error.issues[0].message
        });
    }
    next();
}