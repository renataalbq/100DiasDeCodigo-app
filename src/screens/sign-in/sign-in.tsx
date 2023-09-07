import React from 'react';
import Button from 'components/button/button';
import { View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import useSignInHooks from './useSignInHooks';

WebBrowser.maybeCompleteAuthSession();

export const SignIn = () => {
  const { signIn, request } = useSignInHooks();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button.Primary
        loading={!request}
        text='Entrar com o twitter'
        onTap={signIn}
      />
    </View>
  );
};
