import zod from 'zod'
export const userSigninValidation = (req, res, next)=> {
    const userSigninSchema = zod.object({
        email: zod.email("Email entered is invalid").min(1, "Email is required").trim(),
        password: zod.string().min(6, "Password must be atleast 6 characters")
    });
    const result = userSigninSchema.safeParse(req.body);
    if (!result.success) {
        const errors = {};
        result.error.issues.forEach((err)=> {
            errors[err.path[0]] = err.message;
        });
        return res.status(400).json({
            errors
        });
    }
    next();
}