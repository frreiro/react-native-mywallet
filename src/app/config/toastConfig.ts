import {Toast} from 'react-native-toast-message/lib/src/Toast';

export interface ICustomToast {
  title: string | undefined;
  message: string;
}

export const errorToast = ({title, message}: ICustomToast) => {
  return Toast.show({
    type: 'error',
    text1: title,
    text2: message,
  });
};
