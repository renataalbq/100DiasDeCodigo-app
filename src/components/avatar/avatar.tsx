import React from 'react';
import { Image } from 'react-native';
import { AvatarStyled } from './avatar.style';

export interface AvatarProps {
  url: string;
  size: 'card' | 'profile'
}

export const Avatar: React.FC<AvatarProps> = (props) => {
    return (
        <AvatarStyled size={props.size} source={{uri: props.url}} url={props.url} />
    )

}