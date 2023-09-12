import React from 'react';
import { View, Image } from 'react-native';
import {
  Container,
  Content,
  ImagePodium,
  MainContainer,
  Name,
  PodiumNumber,
  Username
} from './user-card';
import { Avatar } from '../avatar/avatar';
import First from '../../assets/first';
import Second from '../../assets/second.png';
import Third from '../../assets/third.png';
import {TweetUserProps} from '../../types/TweetProps'

export interface StatisticsProps {
  id: number;
  days_participated: number;
  total_likes?: number;
  total_views?: number;
  total_replies?: number;
  max_streak: number;
  user: TweetUserProps;
  active_filter?: string;
  ranking_position?: number;
};


export const UserCard: React.FC<StatisticsProps> = (props) => {
  return (
    <Container>
    <View style={{ flexDirection: 'row', gap: 17 }}>
      <View style={{ paddingLeft: 7, paddingTop: 7 }}>
        <Avatar
          size='card'
          url={props.user.profile_avatar_url}
        /> 
      </View>
      <View style={{ flexDirection: 'row', paddingTop: 10 }}>
        <Name>{props.user.name}</Name>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Username>@{props.user.username}</Username>
        </View>
      </View>
      <View style={{paddingTop: 10, alignContent: 'flex-end', alignItems: 'flex-end', flex: 1, paddingRight: 16}}>
          {props.ranking_position && props.ranking_position+1 === 1 ? (
              <ImagePodium source={First} />
          ) : props.ranking_position+1 === 2 ? (
              <ImagePodium source={Second} />
          ) : props.ranking_position+1 === 3 ? (
              <ImagePodium source={Third} />
          ) :
          <PodiumNumber>{props.ranking_position + 1}</PodiumNumber>}
      </View>
    </View>
    <MainContainer>
      {props.active_filter === 'days_participated' && <Content>{props.days_participated} dias participando</Content>}
      {props.active_filter === 'total_views' && <Content>{props.total_views} views recebidas</Content>}
      {props.active_filter === 'total_likes' && <Content>{props.total_likes} likes recebidos</Content>}
      {props.active_filter === 'total_replies' && <Content>{props.total_replies} comentários recebidos</Content>}

    </MainContainer>
    
  </Container>
  );
};
