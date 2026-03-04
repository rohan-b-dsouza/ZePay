import zod from 'zod'
export const userSigninValidation = (req, res, next)=> {
    const userSigninSchema = zod.object({
        email: zod.email().trim(),
        password: zod.string().min(6),
    });
    const result = userSigninSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            message: result.error.issues[0].message
        });
    }
    next();
}