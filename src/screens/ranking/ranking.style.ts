import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const List = styled(FlatList)`
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
`

export const FilterTabs = styled.View`
    margin-vertical: 8px;
    flex-direction: row;
    margin-horizontal:8px;
`;

export const FilterTab = styled.TouchableOpacity`
    flex: 1;
    padding-vertical: 6px;
    align-items: center;
    border-radius: 8px;
`;

export const Container = styled.View`
    padding-top: 20px;
    background-color: #01010a;
    padding-bottom: 20px;
    margin-bottom: 10px;
    width: 100%;
    justify-content: center;
    border-radius: 8px;
`;

export const Title = styled.Text`
  color:#fff;
  font-size: 32px;
  font-weight: 600;
  padding-top: 10px;
  text-align: center;
`;
