import {User as UserDatabase} from '../schemas/User';
import {ILogin, User} from '../../models/User';

import getRealm from '../database/realmContext';

export const logUserDatabase = async (
  data: ILogin,
): Promise<User | undefined> => {
  const realm = await getRealm();
  try {
    const users = realm
      .objects<UserDatabase>('User')
      .filtered(`email = '${data.email}' && password = '${data.password}'`);

    if (users.length === 0) {
      throw 'Usuário não cadastrado';
    }

    const user = users[0];
    return {
      _id: user._id,
      email: user.email,
      name: user.name,
    };
  } catch (e) {
    console.log(e);
    if (typeof e === 'string') {
      throw e;
    }
  }
};
