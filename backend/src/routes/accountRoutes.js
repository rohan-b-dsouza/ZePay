import { Router } from "express"
import { authMiddleware } from "../middlewares/auth.js";
import { transferValidation } from "../middlewares/transferValidation.js";
import { transfer } from "../controllers/transfer.js";
import { balance } from "../controllers/balance.js";
const accountRouter = Router();


accountRouter.get('/balance', authMiddleware, balance);

accountRouter.post('/transfer', authMiddleware, transferValidation, transfer);

export default accountRouter;