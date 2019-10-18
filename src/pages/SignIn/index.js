import React from 'react';
import { Text } from 'react-native';
import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Input style={{ marginTop: 30 }} icon="email" placeholder="name" />
      <Button>
        <Text>Sign In</Text>
      </Button>
    </Background>
  );
}
