import {errorToast} from '../app/config/toastConfig';
import {ILogin} from '../models/User';
import {logUserDatabase} from '../realm/services/logUser';

export const loginUser = async (data: ILogin) => {
  try {
    const user = await logUserDatabase(data);
    console.log(user);
    return user;
  } catch (e) {
    throw errorToast({
      title: 'Não foi possível fazer o login',
      message: 'Usuário não encontrado',
    });
  }
};
