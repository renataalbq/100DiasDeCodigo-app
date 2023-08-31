import React, { ReactNode } from 'react';
import { theme } from 'theme/theme';
import { LinearContainer } from './background.styles';

type BackgroundProps = {
  children: ReactNode;
};

const Background = ({ children }: BackgroundProps) => {
  const { black, primary } = theme.colors;

  return (
    <LinearContainer colors={[black, primary]}>{children}</LinearContainer>
  );
};

export default Background;
