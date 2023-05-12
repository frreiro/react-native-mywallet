import {InferType} from 'yup';
import {transactionSchema} from '../app/schemas/transactionInputSchema';
import {Transaction as TransactionSchema} from '../databases/schemas/Transaction';

export type TransactionType = 'in' | 'out';

export interface Transaction
  extends Pick<
    TransactionSchema,
    '_id' | 'amount' | 'date' | 'description' | 'userId' | 'type'
  > {}

export interface ITransactionForm extends InferType<typeof transactionSchema> {}

export interface ITransactionAmount {
  amount: number;
  transactions: Transaction[];
}
