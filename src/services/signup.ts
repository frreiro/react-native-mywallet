import {ISignup} from '../entities/User';
import {errorToast} from '../config/toastConfig';
import {createUserInMemory} from './fake/signup';

export const createUser = async (data: ISignup) => {
  try {
    await createUserInMemory(data);
  } catch (e) {
    throw errorToast({
      title: 'Não foi possível criar o usuário',
      message: 'Usuário não foi criado',
    });
  }
};
