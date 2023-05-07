import {ISignup} from '../../entities/User';
import {users} from './users';

export const createUserInMemory = (data: ISignup): Promise<void | string> =>
  new Promise((resolve, reject) => {
    const userFound = users.find(user => user.email === data.email);
    if (userFound) {
      reject('Email já cadastrado');
      return;
    }

    users.push({
      id: new Date().getTime(),
      email: data.email,
      name: data.name,
      password: data.password,
    });
    resolve();
  });
