import {useAppDispatch} from '.';
import {Transaction} from '../../models/Transactions';
import {User} from '../../models/User';
import {
  deleteOneTransaction,
  getUserTransactions,
  saveUserTransactions,
  upadateOneTransaction,
} from '../../services/transactions';
import {
  deleteTransactionInMemory,
  createNewTransactionInMemory,
  reloadTransactionsInMemory,
  updateTransactionInMemory,
} from '../feature/transactionSlice';

export const useTransaction = () => {
  const dispatch = useAppDispatch();

  const createNewTransaction = async (transaction: Transaction) => {
    await saveUserTransactions(transaction);
    dispatch(createNewTransactionInMemory(transaction));
  };

  const getTransactions = async (userId: User['_id']) => {
    try {
      const transactions = await getUserTransactions(userId);
      if (transactions) {
        dispatch(reloadTransactionsInMemory(transactions));
      }
    } catch (e) {}
  };

  const removeTransaction = async (transaction: Transaction) => {
    try {
      await deleteOneTransaction(transaction);
      dispatch(deleteTransactionInMemory(transaction));
    } catch (e) {}
  };

  const updateTransaction = async (transaction: Transaction) => {
    try {
      await upadateOneTransaction(transaction);
      dispatch(updateTransactionInMemory(transaction));
    } catch (e) {}
  };
  return {
    createNewTransaction,
    getTransactions,
    removeTransaction,
    updateTransaction,
  };
};
