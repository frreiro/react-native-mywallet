import {InferType} from 'yup';
import {transactionSchema} from '../schemas/transaction';

export type TransactionType = 'in' | 'out';
export type ITransaction = {
  id: number;
  userId: number;
  type: TransactionType;
  amount: number;
  description: string;
  date: Date;
};

export interface ITransactionForm extends InferType<typeof transactionSchema> {}
