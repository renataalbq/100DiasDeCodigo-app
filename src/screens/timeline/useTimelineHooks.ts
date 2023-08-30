import { useEffect, useState } from 'react';
import { BASE_URL } from '../../services/api';

export default () => {
  const [tweets, setTweets] = useState<Array<Object>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

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

  return {
    fetchTweets,
    loadMoreTweets,
    tweets,
    loading,
    error,
    currentPage
  };
};
