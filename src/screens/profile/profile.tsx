import React, { useRef, useState } from 'react';
import {
  Animated,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Tweet} from '../../components/tweet/tweet';
import { mockData } from '../timeline/timeline';
import { Container, ContainerRelative, WhiteText } from './profile.style';
import { LinearGradient } from 'expo-linear-gradient';
import { ProfileInfo } from '../../components/profile-info/profile-info';

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
      <ContainerRelative>
      <AnimatedImageBackground
        source={{
          uri: PROFILE_BANNER,
        }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: 35 + 60,
          transform: [
            {
              scale: scrollY.interpolate({
                inputRange: [-200, 0],
                outputRange: [5, 1],
                extrapolateLeft: 'extend',
                extrapolateRight: 'clamp',
              }),
            },
          ],
        }}
      >
      </AnimatedImageBackground>
      </ContainerRelative>
      
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: { contentOffset: { y: scrollY }}}],
            { useNativeDriver: true }
          )}
          style={{zIndex: 3, marginTop: 60, paddingTop: 35}}>
         
          <Container style={{borderBottomEndRadius: 20}}>
              <ProfileInfo 
                profilePicture={PROFILE_PICTURE} 
                name={'Renata'} 
                username={'renatinhadev'} 
                progress={progress}
                numberOfLikes={20} 
                numberOfComments={5}
                currentDay={20} />

              <LinearGradient
             colors={['#0d0d0df8', '#772bf1']}>

            <WhiteText style={{ paddingVertical: 20, paddingLeft: 10, fontWeight: 'bold', fontSize: 16}}>Seu Progresso</WhiteText>

            <View style={{marginRight: 20}}>
              {mockData.map((item, index) => (
                  <Tweet id={item.id} 
                  content={item.content} 
                  createdAt={item.createdAt} 
                  name={item.name} 
                  username={item.username}
                  numberOfComments={2}
                  numberOfLikes={20}
                  numberOfRetweets={0}
                  impressions={20} />
              ))}
            </View>
            </LinearGradient>

        </Container>
      </Animated.ScrollView>
      
    </Container>
  );
}
