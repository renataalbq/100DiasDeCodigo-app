import React from 'react';
import { View } from 'react-native';
import {FooterTweet} from '../footer-tweet/footer-tweet';
import { Avatar, Container, Content, Footer, ImageContent, MainContainer, Name, Username } from './tweet.style';

type TweetProps = {
    id: string;
    content: string;
    createdAt: string;
    image?: string;
    numberOfComments?: number;
    numberOfRetweets?: number;
    numberOfLikes?: number;
    impressions?: number;
    name: string;
    username: string;
};

export const Tweet = (props: TweetProps) => {
    return (
      <Container>
          <Avatar source={{uri: 'https://pbs.twimg.com/profile_images/1695191319096803328/LRSwLlVg_400x400.jpg'}} />
  
          <MainContainer>
            <View style={{ flexDirection: 'row' }}>
              <Name>{props.name}</Name>
              <Username>{props.username} · 2h</Username>
            </View>
  
            <Content>{props.content}</Content>
  
            {props.image && <ImageContent source={{uri: props.image}} />}
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Footer>
                <FooterTweet icon="comment" text={props.numberOfComments} />
                <FooterTweet icon="retweet" text={props.numberOfRetweets} />
                <FooterTweet icon="heart" text={props.numberOfLikes} />
                
              </Footer>
              <View  style={{paddingTop: 8}}>
                <FooterTweet icon="chart" text={props.impressions || 0} />
              </View>
            </View>
          </MainContainer>
      </Container>
    );
};
