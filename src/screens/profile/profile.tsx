import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  View,
} from 'react-native';
import {Tweet} from '../../components/tweet/tweet';
import { Container, WhiteText } from './profile.style';
import { ProfileInfo } from '../../components/profile-info/profile-info';
import { mockData } from '../../services/mock-data';
import { Background } from '../../components/background/background';
import { theme } from '../../theme/theme';

const PROFILE_PICTURE =
  'https://pbs.twimg.com/profile_images/1695191319096803328/LRSwLlVg_400x400.jpg';

const PROFILE_BANNER =
  'https://img.freepik.com/fotos-gratis/computador-laptop-cinza-ligado_400718-47.jpg?w=1060&t=st=1693176021~exp=1693176621~hmac=4e8b6aed5e1145dc34addabc050ff6236ab0ba7b8a9c3fe087707f0193c1a6ad';


export const Profile = () => {
  const [progress, setProgress] = useState(20);
  const { overlay } = theme.colors;

  return (
    <Container>
        <ScrollView>
          <Image source={{ uri: PROFILE_BANNER }}  style={{ height: 100, width: '100%' }} />
             <Container>
              <ProfileInfo 
                profilePicture={PROFILE_PICTURE} 
                name={'Renata'} 
                username={'renatinhadev'} 
                progress={progress}
                numberOfLikes={20} 
                numberOfComments={5}
                currentDay={20} />

              <Background>
                <View style={{backgroundColor: overlay}}>
                <WhiteText style={{ paddingVertical: 20, paddingLeft: 10, fontWeight: 'bold', fontSize: 16}}>Seu Progresso</WhiteText>

                  {mockData.map((item, index) => (
                      <Tweet id={item.id} 
                      content={item.content}
                      image={'https://pbs.twimg.com/profile_images/1695191319096803328/LRSwLlVg_400x400.jpg'}
                      createdAt={item.createdAt} 
                      name={item.name} 
                      username={item.username}
                      replies_count={2}
                      likes_count={20}
                      views_count={20} />
                  ))}
                  </View>
                </Background>
        </Container>
      </ScrollView>

    </Container>
  );
}
