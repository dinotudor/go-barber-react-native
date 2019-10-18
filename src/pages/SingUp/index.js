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

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCapitalize="none"
            placeholder="Your name"
          />
          <FormInput
            icon="mail-outline"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Type your email"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="password"
          />

          <SubmitButton>Create free account!</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Already have an account</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
