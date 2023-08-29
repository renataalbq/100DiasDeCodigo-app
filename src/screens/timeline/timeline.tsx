import React, {useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import {Tweet} from '../../components/tweet/tweet';
import { Header } from '../../components/header/header';
import { BASE_URL } from '../../services/api';
import { Background } from '../../components/background/background';

export const Timeline = () => {
    const [tweets, setTweets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchTweets = async (page = 1) => {
        try {
          const response = await fetch(`${BASE_URL}/timeline?page=${page}`);
          const data = await response.json();
          return data.data;
        } catch (error) {
          setIsError(true);
        }
      };

      
  useEffect(() => {
    const getTweets = async () => {
      try {
        const data = await fetchTweets();
        setTweets(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
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

  if (isLoading) {
    return <ActivityIndicator />; //TODO SKELETON
  }
    return (
    <Background>
        <Header />
        <FlatList data={tweets} renderItem={({ item }) => 
          <Tweet 
              id={item.id}
              content={item.content}
              createdAt={formatTimeAgo(item.tweeted_at)}
              image={item.user.profile_avatar_url}
              name={item.user.name} 
              username={item.user.username}
              replies_count={item.replies_count}
              likes_count={item.likes_count}
              views_count={item.impressions} 
          />} />
      </Background>
    );
}
