import React from 'react';
import { View } from 'react-native';
import {FooterTweet} from '../footer-tweet/footer-tweet';
import { Avatar, Container, Content, Footer, ImageContent, MainContainer, Name, Username } from './tweet.style';

type TweetProps = {
    id: string;
    content: string;
    createdAt: string;
    image?: string;
    replies_count?: number;
    likes_count?: number;
    views_count?: number;
    name: string;
    username: string;
};

export const Tweet = (props: TweetProps) => {
    return (
      <Container>
        <View style={{flexDirection: 'row', gap: 20}}>
          <Avatar source={{uri: 'https://pbs.twimg.com/profile_images/1695191319096803328/LRSwLlVg_400x400.jpg'}} />
          <View style={{ flexDirection: 'row', paddingTop: 5 }}>
              <Name>{props.name}</Name>
              <Username>{props.username} · 2h</Username>
            </View>
          </View>
          <MainContainer>
            <Content>{props.content}</Content>
            {props.image && <ImageContent source={{uri: props.image}} />}
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Footer>
                <FooterTweet icon="comment" text={props.replies_count} />
                <FooterTweet icon="heart" text={props.likes_count} />
                
              </Footer>
              <View style={{paddingTop: 8}}>
                <FooterTweet icon="chart" text={props.views_count || 0} />
              </View>
            </View>
          </MainContainer>
      </Container>
    );
};
