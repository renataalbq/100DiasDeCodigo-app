import React from 'react';
import { Tweet } from '../../components/tweet/tweet';
import { Header } from '../../components/header/header';
import { Background } from '../../components/background/background';
import { List } from './timeline.style';
import { TimelineShimmer } from '../../components/shimmers/timeline-shimmer';
import { TweetProps } from '../../types/TweetProps';
import useTimelineHooks from './useTimelineHooks';

export const Timeline = () => {
  const { loading, loadMoreTweets, tweets } = useTimelineHooks();

  return (
    <Background>
      <Header />
      {!loading ? (
        <List
          data={tweets}
          renderItem={({ item }: { item: TweetProps }) => <Tweet {...item} />}
          onEndReached={loadMoreTweets}
          onEndReachedThreshold={0.1}
        />
      ) : (
        <TimelineShimmer count={5} />
      )}
    </Background>
  );
};
