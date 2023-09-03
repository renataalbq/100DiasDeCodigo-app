import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Button from 'components/button/button';
import { View } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

export const SignIn = () => {
  const navigation = useNavigation();

  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;

  WebBrowser.maybeCompleteAuthSession();
  const twitterUrl = {
    authorizationEndpoint: "https://twitter.com/i/oauth2/authorize",
    tokenEndpoint: "https://twitter.com/i/oauth2/token",
    revocationEndpoint: "https://twitter.com/i/oauth2/revoke",
  };

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      redirectUri: AuthSession.makeRedirectUri({
        scheme: 'cemdiasdecodigo',
      }),
      usePKCE: true,
      scopes: [
        "tweet.read",
        "offline.access",
        "like.read",
        "users.read",

      ],
    },
    twitterUrl
  );

  const handleSignIn = () => {
    promptAsync
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button.Primary text='Entrar com o twitter'  onTap={handleSignIn} />
    </View>
  );
};
