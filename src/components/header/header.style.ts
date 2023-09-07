import styled from 'styled-components/native';

export const Container = styled.View`
    padding-top: 35px;
    background-color: #01010a;
    border-bottom-color: #727272;
    border-bottom-width: 1px;
    padding-bottom: 20px;
    width: 100%;
    justify-content: center;
`;

export const Title = styled.Text`
  color:#6c63ff;
  font-size: 35px;
  font-weight: 600;
  padding-top: 10px;
  text-align: center;
`;

export const SocialIconsWrapper = styled.View`
  flex-direction: row; 
  justify-content: center; 
  gap: 30px; 
  margin-top: 10px;
`