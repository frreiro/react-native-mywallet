import {Realm} from '@realm/react';
import {User} from '../schemas/User';

const getRealm = async () => {
  return await Realm.open({
    path: 'mywallet',
    schema: [User],
    deleteRealmIfMigrationNeeded: true,
  });
};
export default getRealm;
