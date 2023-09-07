import React from 'react';
import Button from 'components/button/button';
import * as WebBrowser from 'expo-web-browser';
import useSignInHooks from './useSignInHooks';
import LoginImg from '../../assets/login-img.png';
import Background from 'components/background';
import { Container, Content, LoginPageImage, Title, TitleSecondary } from './sign-in.style';
import { theme } from 'theme/theme';
import { useNavigation } from '@react-navigation/native';

WebBrowser.maybeCompleteAuthSession();

export const SignIn = () => {
  const { signIn, request } = useSignInHooks();
  const { overlay } = theme.colors;
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Timeline');
  }

  return (
    <Background>
      <Container style={{ backgroundColor: overlay}}>     
        <LoginPageImage 
          source={LoginImg} 
          resizeMode="stretch"
        />
        <Content>
          <Title>
           Acompanhe seu progresso no desafio
          </Title>
          <TitleSecondary>{'#100DiasDeCódigo'}</TitleSecondary>

          <Button.Primary
            loading={!request}
            text='Entrar com o twitter'
            onTap={handleSignIn}
            />                       
        </Content>
      </Container>
    </Background>
  );
};
