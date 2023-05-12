import {useAppDispatch} from '.';
import {Transaction} from '../../models/Transactions';
import {User} from '../../models/User';
import {
  deleteOneTransaction,
  getUserTransactions,
  saveUserTransactions,
} from '../../services/transactions';
import {
  deleteTransaction,
  newTransaction,
  reloadTransactions,
} from '../feature/transactionSlice';

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

  const removeTransaction = async (transaction: Transaction) => {
    try {
      await deleteOneTransaction(transaction);

      dispatch(deleteTransaction(transaction));
    } catch (e) {}
  };

  return {
    createNewTransaction,
    getTransactions,
    removeTransaction,
  };
};
