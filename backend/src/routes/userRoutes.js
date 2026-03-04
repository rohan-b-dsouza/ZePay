import {Router} from "express"
import { userSignupValidation } from "../middlewares/userSignupValidation.js";
import { signup } from "../controllers/signup.js";
import { userSigninValidation } from "../middlewares/userSigninValidation.js";
import { signin } from "../controllers/signin.js";
import { authMiddleware } from "../middlewares/auth.js";
import { userUpdateValidation } from "../middlewares/userUpdateValidation.js";
import { updateUser } from "../controllers/updateUser.js";
import { searchUsers } from "../controllers/searchUsers.js";

const userRouter = Router();

userRouter.post('/signup', userSignupValidation, signup);

userRouter.post('/signin', userSigninValidation, signin);

userRouter.put('/profile', authMiddleware, userUpdateValidation, updateUser);

userRouter.get('/search', authMiddleware, searchUsers);

export default userRouter;