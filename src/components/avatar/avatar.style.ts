import styled from 'styled-components/native';
import { AvatarProps } from './avatar';

export const AvatarStyled = styled.Image<AvatarProps>`
    width: ${({ size }) => (size == 'card' ? 36 : 52)}px;
    height: ${({ size }) => (size == 'card' ? 36 : 52)}px;
    border-radius: 50px;
`;