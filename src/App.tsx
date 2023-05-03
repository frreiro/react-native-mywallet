import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignIn from './pages/SignIn';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {Provider} from 'react-redux';
import store from './redux/store';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Signin" component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
}

export default App;
