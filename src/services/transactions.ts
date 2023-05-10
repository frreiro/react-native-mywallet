import {errorToast} from '../app/config/toastConfig';
import {ITransaction} from '../entities/Transactions';
import {User} from '../models/User';
import {
  saveTransactionInMemory,
  transactionInMemory,
} from './fake/transactions';

export const getUserTransactions = async (
  userId: User['_id'],
): Promise<ITransaction[]> => {
  return await transactionInMemory(userId);
};

export const saveUserTransactions = async (transaction: ITransaction) => {
  try {
    await saveTransactionInMemory(transaction);
  } catch (e) {
    throw errorToast({
      title: 'Não foi possível realizar a transação',
      message: 'Erro interno',
    });
  }
};
