import React, {ReactNode} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './styles';

function Container({children}: {children: ReactNode}): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      {children}
    </SafeAreaView>
  );
}

export default Container;
