import React from 'react';
import Background from 'components/background';
import Tweet from 'components/tweet';
import Header from 'components/header';
import { TweetProps } from 'types/TweetProps';
import useTimelineHooks from './useTimelineHooks';
import { List } from './timeline.style';
import { TimelineShimmer } from 'components/shimmers';

export const Timeline = () => {
  const { loading, loadMoreTweets, tweets } = useTimelineHooks();
  return (
    <Background>
      <Header />
      {!loading && tweets !== undefined ? (
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
