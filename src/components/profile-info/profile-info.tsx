import * as React from 'react';
import { TextInput, View } from 'react-native';
import { Container, ContainerRow, Name, Username, WhiteText } from './profile-info.style';
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import { Badge } from '../badge/badge';
import { ProgressBar } from '../progress-bar/progress-bar';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from '../avatar/avatar';
import Button from '../button/button';

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
  const navigation = useNavigation();
  
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
        <View style={{ marginTop: 16, marginLeft: 10}}>
          <Avatar url={props.profilePicture} size={'profile'} />
        </View>
        <View style={{marginLeft: 20}}>
          <View style={{flexDirection: 'row', gap: 200}}>
            <Name>{props.name}</Name>
          </View>
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
            <View style={{marginTop: 14}}>
              <Button.PrimaryOutlined onTap={onAddTag} text='Adicionar tag'/>
            </View>
       ) : null}
       
      </Container>
      {!openInput ? (
        <Container style={{ paddingHorizontal: 10, marginTop: 4,  marginHorizontal: 10}}>
          <View>
            <View  style={{flexDirection: 'row', gap: 230}}>
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
              <WhiteText style={{ marginBottom: 10, fontSize: 14}}>{props.numberOfComments}</WhiteText>
            </View>
          </View>
        </Container>
        ) : (
          <View style={{ marginTop: 20}}>
            <Container style={{ marginHorizontal: 20, marginBottom: 20,}}>
              <WhiteText style={{ marginTop: 15, marginBottom: 8, marginLeft: 3, fontSize: 16, fontWeight: 'bold' }}>Adicionar tag</WhiteText>

              <TextInput
                placeholder="Backend"
                value={newTag}
                onChangeText={setNewTag}
                placeholderTextColor={'rgba(134, 134, 134, 1)'}
                style={{
                  color: 'white',
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: '#292929fd'
                }}
              />
              <Button.Primary text='Salvar' onTap={onSaveTag} />

            </Container>
          </View>
        )}
    </View>
    );
}
