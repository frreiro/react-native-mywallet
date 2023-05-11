import {errorToast} from '../app/config/toastConfig';
import {ILogin} from '../models/User';
import {logUserDatabase} from '../databases/services/logUser';

export const loginUser = async (data: ILogin) => {
  try {
    const user = await logUserDatabase(data);
    return user;
  } catch (e) {
    throw errorToast({
      title: 'Não foi possível fazer o login',
      message: 'Usuário não encontrado',
    });
  }
};
