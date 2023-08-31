import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const BadgeStyled = styled.View`
  padding: 10px 16px;
  border-radius: 8px;
  align-self: flex-start;
  justify-content: center;
  background-color: #282828;
  flex-direction: row;
`;

export const BadgeText = styled.Text`
  color:#fff;
  font-size: 14px;
  font-weight: 700;
`;

export const DeleteButton = styled.TouchableOpacity`
  margin-left: 10px;
  margin-top: 2px;
`