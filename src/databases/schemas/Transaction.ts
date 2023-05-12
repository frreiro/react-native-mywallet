import Realm from 'realm';
import {TransactionType} from '../../models/Transactions';

export class Transaction extends Realm.Object<Transaction> {
  _id!: Realm.BSON.ObjectId;
  userId!: Realm.BSON.ObjectId;
  type!: TransactionType;
  amount!: number;
  description!: string;
  date!: Date;

  static schema = {
    name: 'Transaction',
    properties: {
      _id: 'objectId',
      userId: 'objectId',
      type: 'string',
      amount: 'int',
      description: 'string',
      date: 'date',
    },
    primaryKey: '_id',
  };
}
