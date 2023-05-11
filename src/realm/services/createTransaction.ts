import {Transaction} from '../schemas/Transaction';
import getRealm from '../database/realmContext';
import {Transaction as ITransaction} from '../../models/Transactions';
import {User} from '../schemas/User';
import {getAmount} from '../../utils/checkTypeAndModifyAmount';

export const createTransactionInDatabase = async (data: ITransaction) => {
  const realm = await getRealm();
  try {
    realm.write(() => {
      const transaction: ITransaction = {
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
        user.amount = getAmount(transaction, user.amount);
      }
    });
  } catch (e) {
    console.log(e);
    if (typeof e === 'string') {
      throw e;
    }
  }
};
