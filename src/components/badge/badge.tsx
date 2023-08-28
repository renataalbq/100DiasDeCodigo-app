import * as React from 'react';
import { BadgeStyled, BadgeText } from './badge.style';
import { Text, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

interface BadgeProps {
  text: string;
  onRemove?: () => void;
}

export const Badge: React.FC<BadgeProps> = props => (
  <BadgeStyled>
    <BadgeText>{props.text}</BadgeText>
    {props.onRemove &&
      <TouchableOpacity onPress={props.onRemove} style={{marginLeft: 10, marginTop: 2}}>
        <EvilIcons name={'close'} size={18} color="gray" />
      </TouchableOpacity>
    }
  </BadgeStyled>
);
