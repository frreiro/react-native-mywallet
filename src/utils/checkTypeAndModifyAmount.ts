import {Transaction} from '../models/Transactions';

export const getAmount = (transaction: Transaction, amount: number) => {
  if (transaction.type === 'in') {
    return amount + transaction.amount;
  } else {
    return amount - transaction.amount;
  }
};
