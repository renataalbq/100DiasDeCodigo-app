import React, { useState } from 'react';
import Background from 'components/background';
import { theme } from 'theme/theme';
import { StyleSheet, View } from 'react-native';
import { Container, FilterTab, FilterTabs, List, Title } from './ranking.style';
import { WhiteText } from 'screens/profile/profile.style';
import { UserCard } from 'components/user-card/user-card'
import useRankingHooks from './useRankingHooks';

export const Ranking = () => {
  const { overlay } = theme.colors;
  const [activeFilter, setActiveFilter] = useState('days_participated');
  const { loading, loadMoreUsers, users } = useRankingHooks();

  return (
    <Background>
      <View style={{ backgroundColor: overlay}}>
        <Container>
            <Title>Ranking</Title>
        </Container>
        <FilterTabs>
            <FilterTab
                style={[activeFilter === 'days_participated' && styles.activeFilter]}
                onPress={() => setActiveFilter('days_participated')}
            >
            <WhiteText fontSize={14}>Dias</WhiteText>
            </FilterTab>
            <FilterTab
                style={[activeFilter === 'total_likes' && styles.activeFilter]}
                onPress={() => setActiveFilter('total_likes')}
            >
            <WhiteText fontSize={14}>Curtidas</WhiteText>
            </FilterTab>
            <FilterTab
                style={[activeFilter === 'total_views' && styles.activeFilter]}
                onPress={() => setActiveFilter('total_views')}
            >
            <WhiteText fontSize={14}>Visualizações</WhiteText>
            </FilterTab>
            <FilterTab
                style={[activeFilter === 'total_replies' && styles.activeFilter]}
                onPress={() => setActiveFilter('total_replies')}
            >
            <WhiteText fontSize={14}>Comentários</WhiteText>
            </FilterTab>
        </FilterTabs>
        <List
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }: { item: any, index: number }) => <UserCard {...item} active_filter={activeFilter} ranking_position={index} />}
            onEndReached={loadMoreUsers}
            onEndReachedThreshold={0.1}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
    activeFilter: {
      borderBottomColor: '#782BF1',
      borderBottomWidth: 1,
    },
});
  