import {ITransaction} from '../../entities/Transactions';
import {IUser} from '../../entities/User';

export const transactions: ITransaction[] = [];

export const transactionInMemory = (
  userId: IUser['id'],
): Promise<ITransaction[]> =>
  new Promise(resolve => {
    const userTransactions = transactions.filter(
      transaction => transaction.userId === userId,
    );
    resolve(userTransactions);
  });

export const saveTransactionInMemory = (
  transaction: ITransaction,
): Promise<void> =>
  new Promise(resolve => {
    transactions.push(transaction);
    resolve();
  });
