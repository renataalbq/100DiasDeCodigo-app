import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Container, ContainerRow, Name, Username, WhiteText } from './profile-info.style';
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import { ProfileImage } from '../../screens/profile/profile.style';
import { Badge } from '../badge/badge';
import { ProgressBar } from '../progress-bar/progress-bar';

interface ProfileInfoProps {
  profilePicture: string;
  name: string;
  username: string;
  progress: number;
  numberOfLikes: number;
  numberOfComments: number;
  currentDay: number;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = props => {
  return (
    <View style={{backgroundColor: '#0d0d0df8' }}>
      <ContainerRow>
        <ProfileImage
          source={{ uri: props.profilePicture }}
          style={{ marginTop: 10}}
        />

        <View style={{marginLeft: 20}}>
          <Name>{props.name}</Name>
          <Username>@{props.username}</Username>
        </View>
      </ContainerRow>

      <Container style={{ paddingHorizontal: 10, paddingTop: 20}}>
          <View  style={{ flexDirection: 'row', gap: 10 }}>
            <Badge text={'#frontend'} />
            <Badge text={'#mobile'} />
          </View>
          <TouchableOpacity style={{padding: 12, width: '100%', marginTop: 20, borderRadius: 8, borderWidth: 1, borderColor: '#782BF1'}}>
            <WhiteText style={{textAlign: 'center', fontSize: 16,}}>Adicionar tag</WhiteText>
          </TouchableOpacity>
      </Container>

      <Container style={{ paddingHorizontal: 10, marginTop: 7}}>
        <View>
          <View  style={{flexDirection: 'row', gap: 240}}>
            <WhiteText style={{ marginTop: 15, marginBottom: 8, fontSize: 16, fontWeight: 'bold' }}>Progresso</WhiteText>
            <WhiteText style={{ marginTop: 15, marginBottom: 7, fontSize: 14}}>{props.currentDay}/100</WhiteText>
          </View>
               
          <View style={{marginBottom: 10}}>
            <ProgressBar progress={props.progress} />
          </View>
        </View>

        <View style={{flexDirection: 'row', gap: 20, marginTop: 10}}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <AntDesign name="heart" size={18}  color={'#b6b6b6'} />
            <WhiteText style={{ marginBottom: 10, paddingTop:1, fontSize: 14 }}>{props.numberOfLikes}</WhiteText>
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            <FontAwesome name="comments" size={18} color={'#b6b6b6'} />
            <Text style={{ color: '#080808', marginBottom: 10, paddingTop:1, fontSize: 14 }}>{props.numberOfComments}</Text>
          </View>
        </View>
      </Container>
    </View>
    );
}
