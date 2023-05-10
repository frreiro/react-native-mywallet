import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppDispatch} from '.';
import {unlinkLogin} from '../feature/userSlices';
import {persistor} from '../store';
import {StackParamList} from '../../app/components/Navigator';

interface LogoutParams {
  navigation: NativeStackNavigationProp<StackParamList, keyof StackParamList>;
}

export const useReduxLogout = (navigatorProps?: LogoutParams) => {
  const dispatch = useAppDispatch();

  const logUserOut = async () => {
    await persistor.purge();
    dispatch(unlinkLogin());
    navigatorProps?.navigation.navigate('Signin');
  };

  return {logUserOut};
};
