import {useAppDispatch} from '.';
import {ITransaction} from '../../entities/Transactions';
import {IUser} from '../../entities/User';
import {
  getUserTransactions,
  saveUserTransactions,
} from '../../services/transactions';
import {newTransaction, reloadTransactions} from '../feature/transactionSlice';

export const useTransaction = () => {
  const dispatch = useAppDispatch();

  const createNewTransaction = async (transaction: ITransaction) => {
    await saveUserTransactions(transaction);
    dispatch(newTransaction(transaction));
  };

  const getTransactions = async (userId: IUser['id']) => {
    try {
      const transactions = await getUserTransactions(userId);
      dispatch(reloadTransactions(transactions));
    } catch (e) {}
  };

  const getUserAmount = (transactions: ITransaction[]) => {
    const userAmount = transactions.reduce((iValue, transaction) => {
      if (transaction.type === 'in') {
        return iValue + transaction.amount;
      } else {
        return iValue - transaction.amount;
      }
    }, 0);

    return userAmount;
  };

  return {
    createNewTransaction,
    getTransactions,
    getUserAmount,
  };
};
