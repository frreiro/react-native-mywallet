import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../../redux/hooks';

function Home(): JSX.Element {
  const user = useAppSelector(state => state.user);
  console.log(user);
  return (
    <View>
      <Text>Ola {user.name}</Text>
      <TouchableOpacity>
        <Text>Nova Entrada</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Nova Saída</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
