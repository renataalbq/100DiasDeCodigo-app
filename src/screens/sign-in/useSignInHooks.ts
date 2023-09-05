import { useAuth } from 'context/auth';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default () => {
  const { request, signIn, user } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (user !== null) {
      navigation.navigate('Timeline');
    }
  }, [user]);

  return { request, signIn };
};
