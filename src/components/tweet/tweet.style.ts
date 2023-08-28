import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
    flex-direction: row;
    padding: 10px;
    border-bottom-width: 1px;
    background-color: #181818;
    margin-left: 10px;
    margin-bottom: 10px;
`;

export const MainContainer = styled.View`
    margin-left: 10px;
    margin-right: 20px;
    flex: 1;
`;

export const Name = styled.Text`
    font-weight: 600;
    color: #FFF;
`;

export const Username = styled.Text`
    margin-left: 5px;
    color: #EBEBEB;
`;

export const Content = styled.Text`
    margin-top: 5px;
    line-height: 20px;
    margin-bottom: 5px;
    color: #FFF;
`;

export const ImageContent = styled.Image`
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 15px;
`;

export const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 50px;
`;

export const Footer = styled.View`
    flex-direction: row;
    margin-left: 5px;
    margin-right: 5px;
    gap: 10px;
    padding-top: 8px;
`;
