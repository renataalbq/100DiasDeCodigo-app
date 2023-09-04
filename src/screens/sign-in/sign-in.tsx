import React, { useEffect } from 'react';
import Button from 'components/button/button';
import { View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useAuthRequest } from 'expo-auth-session';
import { useNavigation } from '@react-navigation/native';

WebBrowser.maybeCompleteAuthSession();

const CLIENT_ID = process.env.EXPO_PUBLIC_CLIENT_ID;
if (!CLIENT_ID) {
  throw new Error('EXPO_PUBLIC_CLIENT_ID is required');
}

const CLIENT_SECRET = process.env.EXPO_PUBLIC_CLIENT_SECRET;
if (!CLIENT_SECRET) {
  throw new Error('EXPO_PUBLIC_CLIENT_SECRET is required');
}

const twitterUrl = {
  authorizationEndpoint: 'https://twitter.com/i/oauth2/authorize',
  tokenEndpoint: 'https://twitter.com/i/oauth2/token',
  revocationEndpoint: 'https://twitter.com/i/oauth2/revoke',
};

export const SignIn = () => {
  const navigation = useNavigation();
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      redirectUri: 'cemdiasdecodigo://',
      usePKCE: true,
      scopes: ['tweet.read', 'offline.access', 'like.read', 'users.read'],
    },
    twitterUrl,
  );

  
  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
    }
  }, [response]);

  const handleSignIn = () => {
    promptAsync();
    navigation.navigate('Timeline')
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button.Primary
        loading={!request}
        text='Entrar com o twitter'
        onTap={handleSignIn}
      />
    </View>
  );
};
