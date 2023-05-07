import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransactionType} from '../../entities/Transactions';
import SignUp from '../../pages/Signup';
import SignIn from '../../pages/SignIn';
import Home from '../../pages/Home';
import Transaction from '../../pages/Transaction';
import {useAppSelector} from '../../redux/hooks';

export type StackParamList = {
  Home: undefined;
  Signin: undefined;
  Signup: undefined;
  Transaction: {type: TransactionType};
};

const Stack = createNativeStackNavigator<StackParamList>();

function Navigator(): JSX.Element {
  const user = useAppSelector(state => state.user);

  const redirectIfAuth = () =>
    user.id && user.email && user.name
      ? ('Home' as keyof StackParamList)
      : ('Signup' as keyof StackParamList);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={redirectIfAuth()}>
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Transaction" component={Transaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
