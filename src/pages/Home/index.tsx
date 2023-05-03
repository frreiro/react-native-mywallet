import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../../redux/hooks';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../../App';

type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;

function Home({navigation}: HomeProps): JSX.Element {
  const user = useAppSelector(state => state.user);
  console.log(user);
  return (
    <View>
      <Text>Ola {user.name}</Text>
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
