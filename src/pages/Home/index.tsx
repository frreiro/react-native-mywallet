import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../components/Navigator';
import {unlinkLogin} from '../../redux/feature/userSlices';
import AsyncStorage from '@react-native-async-storage/async-storage';

type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;

function Home({navigation}: HomeProps): JSX.Element {
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  console.log(user);

  const logout = async () => {
    try {
      await AsyncStorage.multiRemove(['user']);
      dispatch(unlinkLogin());
      navigation.navigate('Signin');
    } catch (e) {}
    console.log('Usuário removido com sucesso');
  };

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Ola {user.name}</Text>
        <TouchableOpacity style={{backgroundColor: 'red'}} onPress={logout}>
          <Text>Sair da conta</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Transaction', {type: 'in'})}>
        <Text>Nova Entrada</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Transaction', {type: 'out'})}>
        <Text>Nova Saída</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
