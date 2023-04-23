import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignIn from './pages/SignIn';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signin" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
