import { useAuthRequest } from 'expo-auth-session';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { twitterUrl } from 'utils/constants';

type AuthContextData = {
  user: User;
  request: any;
  signIn: () => void;
  signOut: () => void;
};

type User = {
  token: string;
};

const AuthContext = createContext({} as AuthContextData);

const CLIENT_ID = process.env.EXPO_PUBLIC_CLIENT_ID;
if (!CLIENT_ID) {
  throw new Error('EXPO_PUBLIC_CLIENT_ID is required');
}

const CLIENT_SECRET = process.env.EXPO_PUBLIC_CLIENT_SECRET;
if (!CLIENT_SECRET) {
  throw new Error('EXPO_PUBLIC_CLIENT_SECRET is required');
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User>(null);

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      redirectUri: 'cemdiasdecodigo://',
      usePKCE: true,
      scopes: ['tweet.read', 'offline.access', 'like.read', 'users.read']
    },
    twitterUrl
  );

  const signIn = () => {
    promptAsync();
  };

  const signOut = () => {};

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      updateUserValue({ token: code });
    }
  }, [response]);

  const updateUserValue = (user: User) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, request }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
