import {User} from '../schemas/User';
import getRealm from '..';
import {ISignup} from '../../models/User';

export const createUserInDatabase = async (data: ISignup) => {
  const realm = await getRealm();
  try {
    const users = realm
      .objects<User>('User')
      .filtered(`email == '${data.email}'`)
      .toJSON();

    if (users.length > 0) {
      throw 'Email já cadastrado';
    }

    realm.write(() => {
      realm.create<User>('User', {
        email: data.email,
        name: data.name,
        password: data.password,
      });
    });
  } catch (e) {
    if (typeof e === 'string') {
      throw e;
    }
  }
};
