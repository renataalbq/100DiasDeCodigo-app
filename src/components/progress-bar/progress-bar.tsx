import React from 'react';
import { ProgressBarContainer, ProgressBarStyled } from './progress-bar.style';

export interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  return (
    <ProgressBarContainer>
      <ProgressBarStyled width={props.progress} />
    </ProgressBarContainer>
  );
};