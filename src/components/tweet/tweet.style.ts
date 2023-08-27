import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #686868;
    width: 100%;
    height: 5px;
    border-radius: 6px;
    overflow: hidden;
    flex-direction: row;
    padding: 10px;
    border-bottom-width: 1px;
    border-color: #393948;
    background-color: #000000;
`;

export const MainContainer = styled.View`
    margin-left: 10px;
    flex: 1;
`;

export const Name = styled.Text`
    font-weight: 600;
    color: #FFF;
`;

export const Username = styled.Text`
    margin-left: 5;
    color: #EBEBEB;
`;

export const Content = styled.Text`
    margin-top: 5px;
    line-height: 20px;
    margin-top: 5px;
    color: #FFF;
`;

export const ImageContent = styled.Image`
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 15px;
`;

export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 50px;
`;

export const Footer = styled.View`
    flex-direction: row;
    margin-left: 5px;
    margin-right: 5px;
    gap: 10px;
`;
