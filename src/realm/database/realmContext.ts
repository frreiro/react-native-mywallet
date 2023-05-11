import 'react-native-get-random-values';
import {Realm} from '@realm/react';
import {User} from '../schemas/User';
import {Transaction} from '../schemas/Transaction';

const getRealm = async () => {
  return await Realm.open({
    path: 'mywallet',
    schema: [User, Transaction],
    deleteRealmIfMigrationNeeded: true,
  });
};
export default getRealm;
