import {Transaction} from '../schemas/Transaction';
import getRealm from '..';
import {Transaction as ITransaction} from '../../models/Transactions';
import {User} from '../schemas/User';
import {getAmount} from '../../utils/checkTypeAndModifyAmount';

export const deleteTransactionInDatabase = async (data: ITransaction) => {
  const realm = await getRealm();
  try {
    realm.write(() => {
      let transaction = realm.objectForPrimaryKey<Transaction>(
        Transaction.schema.name,
        new Realm.BSON.ObjectId(data._id),
      );

      if (!transaction) {
        throw 'Transação não identificado';
      }

      const user = realm.objectForPrimaryKey<User>(
        User.schema.name,
        new Realm.BSON.ObjectId(data.userId),
      );

      if (!user) {
        throw 'Usuário não identificado';
      }
      realm.delete(transaction);
      transaction = null;

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
