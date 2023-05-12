import React, {ReactNode} from 'react';
import {Text, View} from 'react-native';
import Container from '../Container';
import {styles} from './styles';

function FormContainer({children}: {children: ReactNode}): JSX.Element {
  return (
    <Container>
      <View style={styles.formContainer}>
        <Text style={styles.title}>MyWallet</Text>
        {children}
      </View>
    </Container>
  );
}

export default FormContainer;
