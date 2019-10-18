import React from 'react';
import { Image } from 'react-native';
import Background from '../../components/Background';

import logo from '../../assets/logo.png';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Type your email"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="password"
          />

          <SubmitButton>Sign In</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Create a new account</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
