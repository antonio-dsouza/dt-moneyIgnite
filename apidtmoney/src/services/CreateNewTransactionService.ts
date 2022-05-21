import { Transactions } from "@prisma/client";
import prismaClient from "../prisma";

interface CreateNewTransaction {
  title: string;
  type: string;
  category: string;
  amount: number;
}

class CreateNewTransactionService {
  async execute({
    title,
    type,
    category,
    amount,
  }: CreateNewTransaction): Promise<Transactions> {
    const result = await prismaClient.transactions.create({
      data: {
        title,
        type,
        category,
        amount,
        createdAt: new Date()
      },
    });

    return result;
  }
}

export { CreateNewTransactionService };
