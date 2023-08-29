import React, {useEffect, useState } from 'react';
import {Tweet} from '../../components/tweet/tweet';
import { Header } from '../../components/header/header';
import { BASE_URL } from '../../services/api';
import { Background } from '../../components/background/background';
import { List } from './timeline.style';
import { TimelineShimmer } from '../../components/shimmers/timeline-shimmer';

export const Timeline = () => {
    const [tweets, setTweets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchTweets = async (page = 1) => {
        try {
          const response = await fetch(`${BASE_URL}/timeline?page=${page}`);
          const data = await response.json();
          return data.data;
        } catch (error) {
          setError(true);
        }
    };

    const loadMoreTweets = async () => {
      const nextPage = currentPage + 1;
      const newData = await fetchTweets(nextPage);
      setTweets(prevTweets => [...prevTweets, ...newData]);
      setCurrentPage(nextPage);
    };
    
      
    useEffect(() => {
      const getTweets = async () => {
        try {
          const data = await fetchTweets();
          setTweets(data);
          setLoading(false);
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      };

    getTweets();
  }, []);

  
  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const tweetedAt = new Date(timestamp);
    const timeDiff = now - tweetedAt;
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    if (hoursDiff > 0 && minutesDiff !== 0) {
      return `${hoursDiff}h ${minutesDiff}min`;
    } else {
      return `${minutesDiff}min`;
    }
  };

    return (
    <Background>
        <Header />
        {!loading ? 
        <List data={tweets} renderItem={({ item }) => 
          <Tweet 
              id={item.id}
              content={item.content}
              tweeted_at={formatTimeAgo(item.tweeted_at)}
              avatar={item.user.profile_avatar_url}
              name={item.user.name} 
              username={item.user.username}
              replies_count={item.replies_count}
              likes_count={item.likes_count}
              views_count={item.impressions} 
          />}
          onEndReached={loadMoreTweets}
          onEndReachedThreshold={0.1}
          />
          : 
         <TimelineShimmer count={5} />
        }
      </Background>
    );
}
