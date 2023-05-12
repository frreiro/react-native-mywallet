import {Transaction} from '../schemas/Transaction';
import getRealm from '..';
import {Transaction as ITransaction} from '../../models/Transactions';
import {User} from '../schemas/User';
import {getAmount} from '../../utils/checkTypeAndModifyAmount';

export const createTransactionInDatabase = async (data: ITransaction) => {
  const realm = await getRealm();
  try {
    realm.write(() => {
      const transaction: ITransaction = {
        _id: data._id,
        amount: data.amount,
        description: data.description,
        type: data.type,
        userId: new Realm.BSON.ObjectId(data.userId),
        date: data.date,
      };

      realm.create<Transaction>('Transaction', transaction);

      const user = realm.objectForPrimaryKey<User>(
        User.schema.name,
        new Realm.BSON.ObjectId(data.userId),
      );

      if (user && user.amount !== undefined) {
        const transactions = realm
          .objects<Transaction>(Transaction.schema.name)
          .filtered('userId = $0', new Realm.BSON.ObjectId(user?._id))
          .toJSON() as unknown as Transaction[];
        user.amount = getAmount(transactions);
      }
    });
  } catch (e) {
    console.log(e);
    if (typeof e === 'string') {
      throw e;
    }
  }
};
