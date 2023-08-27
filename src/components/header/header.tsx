import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container, Title } from './header.style';

export const Header: React.FC = (props) => {
  const { top } = useSafeAreaInsets()

    return (
    <Container style={{paddingTop: top }}>
        <Title>#100DiasDeCódigo</Title>
    </Container>
    )
}