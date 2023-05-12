import React, {ReactNode} from 'react';
import {Text} from 'react-native';
import Container from '../Container';
import {styles} from './styles';

function FormContainer({children}: {children: ReactNode}): JSX.Element {
  return (
    <Container>
      <Text style={styles.title}>MyWallet</Text>
      {children}
    </Container>
  );
}

export default FormContainer;
