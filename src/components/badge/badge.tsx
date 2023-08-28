import * as React from 'react';
import { BadgeStyled, BadgeText } from './badge.style';

interface BadgeProps {
  text: string;
}

export const Badge: React.FC<BadgeProps> = props => (
  <BadgeStyled>
    <BadgeText>{props.text}</BadgeText>
  </BadgeStyled>
);
