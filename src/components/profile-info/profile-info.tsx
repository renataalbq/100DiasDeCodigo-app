import * as React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
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
  const [openInput, setOpenInput] = React.useState(false);
  const [newTag, setNewTag] = React.useState('');
  const [tags, setTags] = React.useState(['frontend', 'mobile']);

  const onAddTag = () => {
      setOpenInput(true)
  }

  const onSaveTag = () => {
    if (newTag) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
    setOpenInput(false);
  }

  const onRemoveTag = (tagToRemove: string) => {
    const updatedTags = tags.filter(tag => tag !== tagToRemove);
    setTags(updatedTags);
  }

  return (
    <View style={{backgroundColor: '#0d0d0df8'}}>
      <ContainerRow style={{ marginHorizontal: 10}}>
        <ProfileImage
          source={{ uri: props.profilePicture }}
          style={{ marginTop: 10}}
        />

        <View style={{marginLeft: 20}}>
          <Name>{props.name}</Name>
          <Username>@{props.username}</Username>
        </View>
      </ContainerRow>

      <Container style={{ paddingHorizontal: 10, paddingTop: 20, marginHorizontal: 10}}>
          <View  style={{ flexDirection: 'row', gap: 10,  flexWrap: 'wrap' }}>
          {tags.map(tag => (
            <Badge
              key={tag}
              text={tag}
              onRemove={openInput ? () => onRemoveTag(tag) : undefined}
            />
          ))}
          {openInput && newTag && (
            <Badge text={newTag} onRemove={() => setNewTag('')} />
          )}
          </View>
         {!openInput ? (
            <TouchableOpacity style={{padding: 12, 
              width: '100%', 
              marginTop: 20, 
              borderRadius: 8, borderWidth: 1, 
              borderColor: '#782BF1',
              }} onPress={onAddTag}>
              <WhiteText style={{textAlign: 'center', fontSize: 16,}}>Adicionar tag</WhiteText>
            </TouchableOpacity>
         ) : null}
         
      </Container>
      {!openInput ? (
        <Container style={{ paddingHorizontal: 10, marginTop: 7,  marginHorizontal: 10}}>
          <View>
            <View  style={{flexDirection: 'row', gap: 240}}>
              <WhiteText style={{ marginTop: 15, marginBottom: 8, fontSize: 16, fontWeight: 'bold' }}>Progresso</WhiteText>
              <WhiteText style={{ marginTop: 15, marginBottom: 7, fontSize: 14}}>{props.currentDay}/100</WhiteText>
            </View>
                
            <View style={{marginBottom: 10,}}>
              <ProgressBar progress={props.progress} />
            </View>
          </View>

          <View style={{flexDirection: 'row', gap: 20, marginTop: 10}}>
            <View style={{flexDirection: 'row', gap: 10}}>
              <AntDesign name="heart" size={16}  color={'#b6b6b6'} />
              <WhiteText style={{ marginBottom: 10, paddingTop:1, fontSize: 14 }}>{props.numberOfLikes}</WhiteText>
            </View>
            <View style={{flexDirection: 'row', gap: 10}}>
              <FontAwesome name="comments" size={16} color={'#b6b6b6'} />
              <Text style={{ color: '#ffffff', marginBottom: 10, fontSize: 14}}>{props.numberOfComments}</Text>
            </View>
          </View>
        </Container>
        ) : (
          <View style={{ marginTop: 20}}>
            <Container style={{ marginHorizontal: 20, marginBottom: 20,}}>
              <WhiteText style={{ marginTop: 15, marginBottom: 8, fontSize: 16, fontWeight: 'bold' }}>Adicionar tag</WhiteText>

              <TextInput
                placeholder="Backend"
                value={newTag}
                onChangeText={setNewTag}
                placeholderTextColor={'rgba(134, 134, 134, 1)'}
                style={{
                  color: 'white',
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: '#292929fd'
                }}
              />
              <TouchableOpacity
                onPress={onSaveTag}
                style={{
                  backgroundColor: '#782BF1',
                  paddingVertical: 12,
                  borderRadius: 8,
                  marginVertical: 20,
                }}
              >
                <WhiteText style={{ textAlign: 'center', fontSize: 16 }}>Salvar</WhiteText>
              </TouchableOpacity>
            </Container>
          </View>
        )}
    </View>
    );
}
