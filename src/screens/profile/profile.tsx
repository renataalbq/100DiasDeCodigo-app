import React, { useState } from 'react';
import { Image, ScrollView, TextInput, View } from 'react-native';
import { Tweet } from '../../components/tweet/tweet';
import { BadgeAlign, BadgeContainer, Container, DataWrapper, Icons, IconsValues, IconsWrapper, Label, ProfileBanner, ProgressAlign, TitleSection, TweetsWrapper, WhiteText } from './profile.style';
import { ProfileInfo } from '../../components/profile-info/profile-info';
import { mockData } from '../../services/mock-data';
import { Background } from '../../components/background/background';
import { theme } from '../../theme/theme';
import { Badge } from '../../components/badge/badge';
import Button from '../../components/button/button';
import { ProgressBar } from '../../components/progress-bar/progress-bar';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const PROFILE_PICTURE =
  'https://pbs.twimg.com/profile_images/1695191319096803328/LRSwLlVg_400x400.jpg';

const PROFILE_BANNER =
  'https://img.freepik.com/fotos-gratis/computador-laptop-cinza-ligado_400718-47.jpg?w=1060&t=st=1693176021~exp=1693176621~hmac=4e8b6aed5e1145dc34addabc050ff6236ab0ba7b8a9c3fe087707f0193c1a6ad';

export const Profile = () => {
  const [progress, setProgress] = useState(20);
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
    <Container>
      <Background>
      <ScrollView>
        <ProfileBanner source={{ uri: PROFILE_BANNER }} />
        <Container>
          <View style={{backgroundColor: '#0d0d0ddd', paddingBottom: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
            <ProfileInfo
              profilePicture={PROFILE_PICTURE}
              name={'Renata'}
              username={'renatinhadev'}
            />
            <BadgeContainer>
              <BadgeAlign>
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
              </BadgeAlign>
              {!openInput && (
                <View style={{marginTop: 14}}>
                  <Button.PrimaryOutlined onTap={onAddTag} text='Adicionar tag'/>
                </View>
              )}
       
            </BadgeContainer>

            {!openInput ? (
              <DataWrapper>
                <View>
                  <ProgressAlign>
                    <TitleSection>Progresso</TitleSection>
                    <WhiteText style={{ paddingTop: 23, fontSize: 14}}>20/100</WhiteText>
                  </ProgressAlign>
                      
                  <View style={{marginBottom: 10,}}>
                    <ProgressBar progress={20} />
                  </View>
                </View>

                <IconsWrapper>
                  <Icons>
                    <AntDesign name="heart" size={16} color={'#b6b6b6'} />
                    <IconsValues>20</IconsValues>
                  </Icons>
                  <Icons>
                    <FontAwesome name="comments" size={16} color={'#b6b6b6'} />
                    <IconsValues>20</IconsValues>
                  </Icons>
                </IconsWrapper>
              </DataWrapper>
              ) : (
              <View style={{ marginTop: 20}}>
                <Container style={{ marginHorizontal: 20, marginBottom: 20,}}>
                  <Label>Adicionar tag</Label>
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
          
            <TweetsWrapper>
              <TitleSection>Seu Progresso</TitleSection>
                {mockData.map(item => (
                  <Tweet {...item} />
                ))}
            </TweetsWrapper>
          
        </Container>
      </ScrollView>
      </Background>
    </Container>
  );
};
