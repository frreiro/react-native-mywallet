import React, {ReactNode} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './styles';
import {GlobalStyles} from '../../../styles/GlobalStyles';

function Container({children}: {children: ReactNode}): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={GlobalStyles.colors.primary}
      />
      {children}
    </SafeAreaView>
  );
}

export default Container;
