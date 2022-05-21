import { Transactions } from "@prisma/client";
import prismaClient from "../prisma";

class GetAllTransactionsService {
  async execute(): Promise<Transactions[]> {
    const transactions = await prismaClient.transactions.findMany();
    return transactions;
  }
}

export { GetAllTransactionsService };
