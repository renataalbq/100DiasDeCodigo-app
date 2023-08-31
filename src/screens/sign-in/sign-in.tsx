import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Button from 'components/button/button';
import Background from 'components/background';

export const SignIn = () => {
  const navigation = useNavigation();

  return (
    <Background>
      <Button.Primary text='Entrar com o twitter' />
    </Background>
  );
};
