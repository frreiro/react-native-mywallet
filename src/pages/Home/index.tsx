import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../../redux/hooks';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../components/Navigator';
import {useReduxLogout} from '../../redux/hooks/useLogout';
import TransactionsViewer from '../../components/TransactionsViewer';

type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;

function Home({navigation}: HomeProps): JSX.Element {
  const user = useAppSelector(state => state.user);

  const {logUserOut} = useReduxLogout({
    navigation: navigation,
  });

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Ola {user.name}</Text>
        <TouchableOpacity style={{backgroundColor: 'red'}} onPress={logUserOut}>
          <Text>Sair da conta</Text>
        </TouchableOpacity>
      </View>
      <TransactionsViewer />
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
