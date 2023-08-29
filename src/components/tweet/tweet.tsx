import React from 'react';
import { View } from 'react-native';
import {FooterTweet} from '../footer-tweet/footer-tweet';
import { Container, Content, Footer, ImageContent, MainContainer, Name, Username } from './tweet.style';
import { Avatar } from '../avatar/avatar';

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
          <Avatar size='card' url={props.image ? props.image : ''} />
          <View style={{ flexDirection: 'row', paddingTop: 5 }}>
              <Name>{props.name}</Name>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <Username>{props.username} </Username>
                <Username>·  {props.createdAt}</Username>
              </View>
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
