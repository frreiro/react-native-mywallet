import React from 'react';
import {Provider} from 'react-redux';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {PersistGate} from 'redux-persist/integration/react';

import Navigator from './components/Navigator';
import {store, persistor} from '../redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
        <Toast />
      </PersistGate>
    </Provider>
  );
}

export default App;
