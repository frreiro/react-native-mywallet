import {ILogin, User} from '../../entities/User';
import {users} from './users';

export const logUserInMemory = (data: ILogin): Promise<User> =>
  new Promise((resolve, reject) => {
    const userFound = users.find(
      user => user.email === data.email && user.password === data.password,
    );
    if (userFound) {
      resolve(userFound);
      return;
    }
    reject();
  });
