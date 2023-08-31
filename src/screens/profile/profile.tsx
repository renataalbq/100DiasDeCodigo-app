import React, { useState } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import Tweet from 'components/tweet';
import { BadgeAlign, BadgeContainer, Banner, Container, DataWrapper, Icons, IconsValues, IconsWrapper, Label, ProgressAlign, TitleSection, TweetsWrapper, WhiteText } from './profile.style';
import ProfileInfo from '../../components/profile-info/profile-info';
import { mockData } from '../../services/mock-data';
import Background from '../../components/background/background';
import { Badge } from '../../components/badge/badge';
import Button from '../../components/button/button';
import { ProgressBar } from '../../components/progress-bar/progress-bar';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { PROFILE_BANNER, PROFILE_PICTURE } from 'utils/constants';

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
        <Banner source={{ uri: PROFILE_BANNER }} />
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
                    <WhiteText fontSize={14} style={{ paddingTop: 23}}>20/100</WhiteText>
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
                  <Tweet {...item} key={item.id.toString()} />
                ))}
            </TweetsWrapper>
          
        </Container>
      </ScrollView>
      </Background>
    </Container>
  );
};
