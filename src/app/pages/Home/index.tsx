import React from 'react';
import {useAppSelector} from '../../../redux/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../components/Navigator';
import {useReduxLogout} from '../../../redux/hooks/useLogout';
import TransactionsViewer from '../../components/TransactionsViewer';
import Container from '../../layout/Container';
import {Header} from '../../components/Header';
import TransactionButton from '../../components/TransactionButton';
import {View} from 'react-native';
import {styles} from './styles';

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
      <View style={styles.transaction_button_container}>
        <TransactionButton
          type="in"
          onPress={() => navigation.navigate('Transaction', {type: 'in'})}
        />
        <TransactionButton
          type="out"
          onPress={() => navigation.navigate('Transaction', {type: 'out'})}
        />
      </View>
    </Container>
  );
}

export default Home;
