import Realm from 'realm';

export class User extends Realm.Object<User> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  email!: string;
  password!: string;
  amount?: number;

  static schema = {
    name: 'User',
    properties: {
      _id: {
        type: 'objectId',
        default: () => new Realm.BSON.ObjectId(),
      },
      name: 'string',
      email: 'string',
      password: 'string',
      amount: {
        type: 'int',
        default: () => 0,
      },
    },
    primaryKey: '_id',
  };
}
