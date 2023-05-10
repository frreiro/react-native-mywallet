import Realm from 'realm';

export class User extends Realm.Object<User> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  email!: string;
  password!: string;

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
    },
    primaryKey: '_id',
  };
}
