import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container, SocialIconsWrapper, Title } from './header.style';
import { Socials } from 'components/socials/socials';

const Header: React.FC = props => {
  const { top } = useSafeAreaInsets();

  return (
    <>
      <Container style={{ paddingTop: top }}>
        <Title>#100DiasDeCódigo</Title>
        <SocialIconsWrapper>
          <Socials icon={'discord'} url={'https://discord.gg/he4rt'} />
          <Socials icon={'github'} url={'https://github.com/he4rt'} />
          <Socials icon={'twitter'} url={'https://twitter.com/He4rtDevs'} />
        </SocialIconsWrapper>
      </Container>
    </>

  );
};

export default Header;
