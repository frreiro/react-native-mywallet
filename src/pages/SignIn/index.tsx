import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Container from '../../layout/Container';
import {styles} from './styles';
import CustomInput from '../../components/customInput';

export type UserDataType = {
  email: string | undefined;
  password: string | undefined;
};

function SignIn(): JSX.Element {
  const [userData, setUserData] = useState<UserDataType>({
    email: undefined,
    password: undefined,
  });

  return (
    <Container>
      <Text>MyWallet</Text>
      <CustomInput
        placeholder="E-mail"
        name="email"
        setState={setUserData}
        state={userData}
      />
      <CustomInput
        placeholder="Senha"
        name="password"
        setState={setUserData}
        state={userData}
      />
      <TouchableOpacity style={styles.button}>
        <Text>Enter</Text>
      </TouchableOpacity>
      <Text style={styles.info_text}>Primeira Vez? Cadastre-se!</Text>
    </Container>
  );
}

export default SignIn;
