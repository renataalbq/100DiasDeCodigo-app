import { theme } from './../../theme/theme';
import styled from 'styled-components/native';

export interface ButtonColorProps {
  outlined?: boolean;
  variant: ButtonVariantType;
}

interface ButtonStyledProps {
  loading: boolean;
}

type ButtonVariantType = 'primary' ;

interface ButtonVariantProps {
    textColor: string;
    bgColor: string;
}
  
type ButtonVariantConfigProps = ButtonVariantType;

const ButtonVariantConfig: (props: any) => Record<ButtonVariantConfigProps, ButtonVariantProps> = theme => ({
  primary: {
    textColor: '#DDDDDD',
    bgColor: '#782BF1',
  },
});

export const ButtonStyled = styled.View<ButtonStyledProps>`
  opacity: ${props => (props.loading ? 0.5 : 1)};
  justify-content: center;
  align-items: center;
  align-self: 'stretch';
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonTouchableOpacityStyled = styled.TouchableOpacity.attrs(({ theme }) => ({
  activeOpacity: theme.opacity?.active}))<ButtonColorProps >`
  background-color: ${props =>
    props.outlined
      ? 'transparent'
      : ButtonVariantConfig(props.theme.colors)[props.variant].bgColor};
  border-color: ${props =>
    props.outlined
      ? ButtonVariantConfig(props.theme.colors)[props.variant].bgColor
      : 'transparent'};
  border-radius: 8px;
  border-width: 1px;
  align-self: stretch;
  height: 48px;
  justify-content: center;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export const ButtonTextStyled = styled.Text<ButtonColorProps>`
  color: ${props => ButtonVariantConfig(props?.theme.colors)[props.variant].textColor};
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

interface ButtonContentStyledProps {
  loading: boolean;
}

export const ButtonContentStyled = styled.View<ButtonContentStyledProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: ${props => (props.loading ? 'hidden' : 'visible')};
  opacity: ${props => (props.loading ? 0 : 1)};
`;