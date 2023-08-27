import styled from 'styled-components/native';

interface ProgressBarStyledProps {
    width: number;
 }


export const ProgressBarContainer = styled.View`
    background-color: #686868;
    width: 100%;
    height: 5px;
    border-radius: 6px;
    overflow: hidden;
`;

export const ProgressBarStyled = styled.View<ProgressBarStyledProps>`
    height: 100%;
    background-color: #6c63ff;
    width: ${props => props.width}%;

`;
