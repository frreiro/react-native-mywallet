import {InferType} from 'yup';
import {transactionSchema} from '../schemas/transaction';

export type TransactionType = 'in' | 'out';
export type ITransaction = {
  userId: number;
  type: TransactionType;
  amount: number;
  description: string;
};

export interface ITransactionForm extends InferType<typeof transactionSchema> {}
