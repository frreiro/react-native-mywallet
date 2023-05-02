import {ILogin} from '../entities/User';
import {errorToast} from '../config/toastConfig';
import {logUserInMemory} from './fake/login';

export const loginUser = async (data: ILogin) => {
  try {
    await logUserInMemory(data);
  } catch (e) {
    throw errorToast({
      title: 'Não foi possível fazer o login',
      message: 'Usuário não encontrado',
    });
  }
};
