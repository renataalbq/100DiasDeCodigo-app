import * as React from 'react';
import { AvatarWrapper, ContainerRow, Name, UserWrapper, Username } from './profile-info.style';
import { Avatar } from '../avatar/avatar';

interface ProfileInfoProps {
  profilePicture: string;
  name: string;
  username: string;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = props => {

  return (
    <>
      <ContainerRow>
        <AvatarWrapper>
          <Avatar url={props.profilePicture} size={'profile'} />
        </AvatarWrapper>
        <UserWrapper>
          <Name>{props.name}</Name>
          <Username>@{props.username}</Username>
        </UserWrapper>
      </ContainerRow>
    </>
    );
}
