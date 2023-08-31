import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import Tweet from 'components/tweet';
import ProfileInfo from 'components/profile-info';
import Background from 'components/background';

import { mockData } from 'services/mock-data';
import { PROFILE_BANNER, PROFILE_PICTURE } from 'utils/constants';
import { Banner, Container, ProfileContent, WhiteText } from './profile.style';

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
                <Tweet {...item} key={item.id.toString()} />
              ))}
            </ProfileContent>
          </Background>
        </Container>
      </ScrollView>
    </Container>
  );
};
