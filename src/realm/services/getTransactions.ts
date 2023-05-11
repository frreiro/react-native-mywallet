import {Transaction} from '../schemas/Transaction';
import getRealm from '../database/realmContext';
import {User} from '../schemas/User';
import {ITransactionAmount} from '../../models/Transactions';

export const getTransactionInDatabase = async (
  userId: Realm.BSON.ObjectId,
): Promise<ITransactionAmount | undefined> => {
  const realm = await getRealm();
  try {
    const transactions = realm
      .objects<Transaction>(Transaction.schema.name)
      .filtered('userId = $0', new Realm.BSON.ObjectId(userId))
      .toJSON() as unknown as Transaction[];

    const user = realm.objectForPrimaryKey<User>(
      User.schema.name,
      new Realm.BSON.ObjectId(userId),
    );

    if (user?.amount !== undefined) {
      return {
        amount: user.amount,
        transactions: transactions,
      };
    }
  } catch (e) {
    console.log(e);
    if (typeof e === 'string') {
      throw e;
    }
  }
};
