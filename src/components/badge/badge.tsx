import * as React from 'react';
import { BadgeStyled, BadgeText, DeleteButton } from './badge.style';
import { EvilIcons } from '@expo/vector-icons';

interface BadgeProps {
  text: string;
  onRemove?: () => void;
}

export const Badge: React.FC<BadgeProps> = props => (
  <BadgeStyled>
    <BadgeText>#{props.text}</BadgeText>
    {props.onRemove &&
      <DeleteButton onPress={props.onRemove}>
        <EvilIcons name={'close'} size={18} color="gray" />
      </DeleteButton>
    }
  </BadgeStyled>
);
