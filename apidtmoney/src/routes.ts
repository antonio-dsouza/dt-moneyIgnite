import { Router } from "express";
import { CreateNewTransactionController } from "./controllers/CreateNewTransactionController";
import { GetAllTransactionsController } from "./controllers/GetAllTransactionsController";

const router = Router();

const createNewTransactionController = new CreateNewTransactionController()
const getAllTransactionsController = new GetAllTransactionsController()

router.post("/transaction", createNewTransactionController.handle);
router.get("/transactions", getAllTransactionsController.handle);


export { router };
