import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Tweet } from '../../components/tweet/tweet';
import { Banner, Container, ProfileContent, WhiteText } from './profile.style';
import { ProfileInfo } from '../../components/profile-info/profile-info';
import { mockData } from '../../services/mock-data';
import { Background } from '../../components/background/background';
import { PROFILE_BANNER, PROFILE_PICTURE } from '../../utils/constants';

export const Profile = () => {
  const [progress, setProgress] = useState(20);

  return (
    <Container>
      <ScrollView>
        <Banner source={{ uri: PROFILE_BANNER }} />
        <Container>
          <ProfileInfo
            profilePicture={PROFILE_PICTURE}
            name={'Renata'}
            username={'renatinhadev'}
            progress={progress}
            numberOfLikes={20}
            numberOfComments={5}
            currentDay={20}
          />

          <Background>
            <ProfileContent>
              <WhiteText paddingVertical={20} fontWeight fontSize={16}>
                Seu Progresso
              </WhiteText>

              {mockData.map(item => (
                <Tweet {...item} />
              ))}
            </ProfileContent>
          </Background>
        </Container>
      </ScrollView>
    </Container>
  );
};
