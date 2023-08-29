import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Background } from '../../components/background/background';
import Button from '../../components/button/button';

export const SignIn = () => {
    const navigation = useNavigation();

    return (
        <Background>
            <Button.Primary text='Entrar com o twitter' />
        </Background>
    );
}
