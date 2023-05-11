import {InferType} from 'yup';
import {transactionSchema} from '../app/schemas/transactionInputSchema';
import {Transaction as TransactionSchema} from '../realm/schemas/Transaction';

export type TransactionType = 'in' | 'out';

export interface Transaction
  extends Pick<
    TransactionSchema,
    'amount' | 'date' | 'description' | 'userId' | 'type'
  > {
  _id?: Realm.BSON.ObjectId;
}

export interface ITransactionForm extends InferType<typeof transactionSchema> {}

export interface ITransactionAmount {
  amount: number;
  transactions: Transaction[];
}
