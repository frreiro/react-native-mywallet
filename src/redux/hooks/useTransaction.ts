import {useAppDispatch} from '.';
import {Transaction} from '../../models/Transactions';
import {User} from '../../models/User';
import {
  getUserTransactions,
  saveUserTransactions,
} from '../../services/transactions';
import {newTransaction, reloadTransactions} from '../feature/transactionSlice';

export const useTransaction = () => {
  const dispatch = useAppDispatch();

  const createNewTransaction = async (transaction: Transaction) => {
    await saveUserTransactions(transaction);
    dispatch(newTransaction(transaction));
  };

  const getTransactions = async (userId: User['_id']) => {
    try {
      const transactions = await getUserTransactions(userId);
      if (transactions) {
        dispatch(reloadTransactions(transactions));
      }
    } catch (e) {}
  };

  return {
    createNewTransaction,
    getTransactions,
  };
};
