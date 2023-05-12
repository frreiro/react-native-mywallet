import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useAppSelector} from '../../../redux/hooks';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../components/Navigator';
import {useReduxLogout} from '../../../redux/hooks/useLogout';
import TransactionsViewer from '../../components/TransactionsViewer';
import Container from '../../layout/Container';
import {Header} from '../../components/Header';

type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;

function Home({navigation}: HomeProps): JSX.Element {
  const user = useAppSelector(state => state.user);

  const {logUserOut} = useReduxLogout({
    navigation: navigation,
  });

  return (
    <Container>
      <Header title={`Olá, ${user.name}`} onPress={logUserOut} />
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
    </Container>
  );
}

export default Home;
