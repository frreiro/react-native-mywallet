import {ILogin} from '../../entities/User';
import {users} from './users';

export const logUserInMemory = (data: ILogin) =>
  new Promise((resolve, reject) => {
    const user = users.find(
      user => user.email === data.email && user.password === data.password,
    );
    if (!user) {
      reject();
    }
    resolve(user);
  });
