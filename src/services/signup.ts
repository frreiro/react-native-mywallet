import {errorToast} from '../app/config/toastConfig';
import {ISignup} from '../models/User';
import {createUserInDatabase} from '../realm/services/createUser';

export const createUser = async (data: ISignup) => {
  try {
    await createUserInDatabase(data);
  } catch (e) {
    throw errorToast({
      title: 'Não foi possível criar o usuário',
      message: typeof e === 'string' ? e : 'Usuário não foi criado',
    });
  }
};
