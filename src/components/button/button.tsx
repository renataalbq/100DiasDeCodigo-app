import React from 'react';
import {
  ButtonContentStyled,
  ButtonStyled,
  ButtonTextStyled,
  ButtonTouchableOpacityStyled,
  ButtonColorProps,
} from './button.style';

interface ButtonProps {
  onTap?: () => void;
  text?: string;
  loading?: boolean;
}

type ButtonBaseProps = ButtonColorProps & ButtonProps;

const ButtonBase: React.FC<ButtonBaseProps> = ({
  onTap,
  text,
  loading = false,
  outlined,
}) => {
  return (
    <ButtonStyled loading={loading}>
      <ButtonTouchableOpacityStyled
        onPress={onTap}
        disabled={loading}
        variant={'primary'}
        outlined={outlined}>
        <ButtonContentStyled loading={loading}>
          {text && <ButtonTextStyled variant={'primary'} outlined={outlined}>{text}</ButtonTextStyled>}
        </ButtonContentStyled>
      </ButtonTouchableOpacityStyled>
    </ButtonStyled>
  );
};

const Button = {
  Primary: (props: ButtonProps) => <ButtonBase variant='primary' {...props} />,
  PrimaryOutlined: (props: ButtonProps) => <ButtonBase variant='primary' outlined {...props} />,
};

export default Button;



