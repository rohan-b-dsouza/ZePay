import zod from 'zod'
export const userSignupValidation = (req, res, next)=> {
    const userSignupSchema = zod.object({
        email: zod.email().trim(),
        password: zod.string().min(6),
        firstName: zod.string().max(50).trim(),
        lastName: zod.string().trim()
    });
    const result = userSignupSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            message: result.error.issues[0].message
        });
    }
    next();
}