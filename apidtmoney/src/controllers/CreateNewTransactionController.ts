import { Request, Response } from "express";
import { CreateNewTransactionService } from "../services/CreateNewTransactionService";

class CreateNewTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, type, category, amount } = request.body;

    const createNewTransactionService = new CreateNewTransactionService();

    const results = await createNewTransactionService.execute({title, type, category, amount});

    return response.json(results);
  }
}

export { CreateNewTransactionController };
