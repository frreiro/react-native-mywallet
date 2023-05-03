import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignIn from './pages/SignIn';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {Provider} from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import Transaction from './pages/Transaction';
import {TransactionType} from './entities/Transactions';

export type StackParamList = {
  Home: undefined;
  Signin: undefined;
  Signup: undefined;
  Transaction: {type: TransactionType};
};

const Stack = createNativeStackNavigator<StackParamList>();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Home">
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="Signin" component={SignIn} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Transaction" component={Transaction} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
}

export default App;
