import {errorToast} from '../app/config/toastConfig';
import {ITransactionAmount, Transaction} from '../models/Transactions';
import {User} from '../models/User';
import {createTransactionInDatabase} from '../databases/services/createTransaction';
import {getTransactionInDatabase} from '../databases/services/getTransactions';

export const getUserTransactions = async (
  userId: User['_id'],
): Promise<ITransactionAmount | undefined> => {
  return await getTransactionInDatabase(userId);
};

export const saveUserTransactions = async (transaction: Transaction) => {
  try {
    await createTransactionInDatabase(transaction);
  } catch (e) {
    throw errorToast({
      title: 'Não foi possível realizar a transação',
      message: typeof e === 'string' ? e : 'Erro interno',
    });
  }
};
