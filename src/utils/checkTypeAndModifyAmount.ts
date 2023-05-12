import {Transaction} from '../models/Transactions';

export const getAmount = (transactions: Transaction[]) => {
  return transactions.reduce((oldValue, transaction) => {
    if (transaction.type === 'in') {
      return oldValue + transaction.amount;
    } else {
      return oldValue - transaction.amount;
    }
  }, 0);
};
