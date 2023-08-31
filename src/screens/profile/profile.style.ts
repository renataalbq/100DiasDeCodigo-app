import styled from 'styled-components/native';

type WhiteTextProps = {
  mt?: number;
  mb?: number;
  fontSize: number;
  paddingVertical?: number;
  fontWeight?: boolean;
};

export const Container = styled.View`
  flex: 1;
`;

export const ProfileContent = styled.View`
  background-color: ${props => props.theme.colors.overlay};
  margin-horizontal: 10px;
`;

export const Banner = styled.Image`
  height: 100px;
  width: 100%;
`;

export const WhiteText = styled.Text<WhiteTextProps>`
  color: #fff;
  font-size: ${({ fontSize }) => fontSize}px;
  margin-top: ${({ mt }) => mt || 0}px;
  margin-bottom: ${({ mb }) => mb || 0}px;
  padding-vertical: ${({ paddingVertical }) => paddingVertical || 0}px;
  font-weight: ${({ fontWeight }) => (fontWeight ? 'bold' : 'normal')};
`;

export const TweetsCount = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #fff;
`;

export const TweetsText = styled.View`
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ContainerRelative = styled.View`
  position: relative;
`;

export const ContainerRow = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const ProfileImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 40px;
  border-width: 4px;
  border-color: black;
  margin-top: 5px;
  margin-left: 5px;
`;
