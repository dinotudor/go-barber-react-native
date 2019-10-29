import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';

import { Container } from './styles';

export default function Profile() {
  return (
    <Background>
      <Container />
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'My Profile',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
