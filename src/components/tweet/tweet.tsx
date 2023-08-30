import React from 'react';
import { View } from 'react-native';
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

export const Tweet = ({
  id,
  content,
  tweeted_at,
  image,
  replies_count,
  likes_count,
  impressions,
  user
}: TweetProps) => {
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
        {image && <ImageContent source={{ uri: image }} />}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Footer>
            <FooterTweet icon='comment' text={replies_count} />
            <FooterTweet icon='heart' text={likes_count} />
          </Footer>
          <View style={{ paddingTop: 14 }}>
            <FooterTweet icon='chart' text={impressions || 0} />
          </View>
        </View>
      </MainContainer>
    </Container>
  );
};
