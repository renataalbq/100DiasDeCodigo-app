import React, { useRef, useState } from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Tweet} from '../../components/tweet/tweet';
import { mockData } from '../timeline/timeline';
import { Container, ContainerRelative, WhiteText } from './profile.style';
import { LinearGradient } from 'expo-linear-gradient';
import { ProfileInfo } from '../../components/profile-info/profile-info';
import { Tweet2 } from '../../components/tweet/tweet-figma';

const PROFILE_PICTURE =
  'https://pbs.twimg.com/profile_images/1695191319096803328/LRSwLlVg_400x400.jpg';

const PROFILE_BANNER =
  'https://img.freepik.com/fotos-gratis/computador-laptop-cinza-ligado_400718-47.jpg?w=1060&t=st=1693176021~exp=1693176621~hmac=4e8b6aed5e1145dc34addabc050ff6236ab0ba7b8a9c3fe087707f0193c1a6ad';

const AnimatedImageBackground = Animated.createAnimatedComponent(
  ImageBackground
);

export const Profile = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [progress, setProgress] = useState(20);

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

              <LinearGradient colors={['rgba(13, 13, 13, 1)', 'rgba(36, 0, 93, 0.708)', '#393939f8']}>

              <WhiteText style={{ paddingVertical: 20, paddingLeft: 10, fontWeight: 'bold', fontSize: 16}}>Seu Progresso</WhiteText>

            <View style={{marginRight: 20}}>
              {mockData.map((item, index) => (
                  <Tweet id={item.id} 
                  content={item.content} 
                  createdAt={item.createdAt} 
                  name={item.name} 
                  username={item.username}
                  replies_count={2}
                  likes_count={20}
                  views_count={20} />
              ))}
            </View>
            </LinearGradient>

        </Container>
      </ScrollView>

    </Container>
  );
}
