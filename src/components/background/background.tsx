import React, { ReactNode } from 'react';
import { theme } from 'theme/theme';
import { LinearContainer } from './background.styles';
import { View } from 'react-native';

type BackgroundProps = {
  children: ReactNode;
};

const Background = ({ children }: BackgroundProps) => {
  const { black, primary, overlay } = theme.colors;

  return (
    <LinearContainer colors={[black, primary]}>
        {children}
    </LinearContainer>
  );
};

export default Background;