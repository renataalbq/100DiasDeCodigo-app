import React, { useState }  from 'react';
import { Modal, Image, View, TouchableOpacity, Text } from 'react-native';
import { FooterTweet } from '../footer-tweet/footer-tweet';
import {
  Container,
  Content,
  Footer,
  ImageContent,
  MainContainer,
  Name,
  Username
} from './tweet.style';
import { Avatar } from '../avatar/avatar';
import { formatTimeAgo } from '../../utils/format';
import { TweetProps } from '../../types/TweetProps';
import { Video, ResizeMode } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const Tweet = ({
  id,
  content,
  tweeted_at,
  medias,
  replies_count,
  likes_count,
  views_count,
  user
}: TweetProps) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleImageClick = (media) => {
    setSelectedMedia(media);
    setIsModalVisible(true);
  };

  const renderMedia = () => {
    if (!selectedMedia) return null;
    const { media_type, payload } = selectedMedia;

    if (media_type === 'photo') {
        return (
          <Image
            source={{ uri:  selectedMedia.thumbnail}}
            style={{ width: 360, height: '100%'}}
            resizeMode="contain"
          />
        );
    } else if (media_type === 'video') {
      const videoMedia = payload.variants && payload.variants[0].url
        ? payload.variants[0].url
        : null;

      if (videoMedia) {
        return (
          <>
          <Video
            ref={video}
            style={{width: 360, height: '100%'}}
            source={{
              uri: videoMedia,
            }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />

        </>
          
        );
      } else {
          return <Text>Vídeo não disponível.</Text>;
      }
    }

    return null;
  };
  
  return (
    <Container>
      <View style={{ flexDirection: 'row', gap: 17 }}>
        <View style={{ paddingLeft: 7, paddingTop: 7 }}>
          <Avatar
            size='card'
            url={user.profile_avatar_url ? user.profile_avatar_url : ''}
          />
        </View>
        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
          <Name>{user.name}</Name>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <Username>{user.username} </Username>
            <Username>· {formatTimeAgo(tweeted_at)}</Username>
          </View>
        </View>
      </View>
      <MainContainer>
        <Content>{content}</Content>
        {!!medias && medias.length > 0 && medias.map(media => (
             <TouchableOpacity key={media.id} onPress={() => handleImageClick(media)}>
              <ImageContent key={media.id} source={{ uri: media.thumbnail }} />
            </TouchableOpacity>
          ))}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Footer>
            <FooterTweet icon='comment' text={replies_count} />
            <FooterTweet icon='heart' text={likes_count} />
          </Footer>
          <View style={{ paddingTop: 14 }}>
            <FooterTweet icon='chart' text={views_count} />
          </View>
        </View>
      </MainContainer>
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: '#070202', padding: 20, borderRadius: 10 }}>
            <TouchableOpacity
              style={{ position: 'absolute', top: 10, padding: 10, right: 18}}
              onPress={() => {
                setIsModalVisible(false);
                setSelectedMedia(null);
              }}
            >
              <Ionicons name={'close'} size={28} color="white" />
            </TouchableOpacity>
            {renderMedia()}
          </View>
        </View>
      </Modal>
    </Container>
  );
};

export default Tweet;
