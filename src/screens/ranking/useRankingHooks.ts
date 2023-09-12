import { useEffect, useState } from 'react';

export default () => {
  const [users, setUsers] = useState<Array<Object>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
 
  const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

  if (!BASE_URL) {
    throw new Error('EXPO_PUBLIC_CLIENT_ID is required');
  }

  const fetchUsersStatistics = async (page = 1, activeFilter?: string) => {
    try {
      const response = await fetch(`${BASE_URL}/leaderboard?page=${page}&orderBy=${activeFilter}`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      setError(true);
    }
  };

  const loadMoreUsers = async () => {
    const nextPage = currentPage + 1;
    const newData = await fetchUsersStatistics(nextPage);
    setUsers(prevUsers => [...prevUsers, ...newData]);
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await loadMoreUsers();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return {
    fetchUsersStatistics,
    loadMoreUsers,
    users,
    loading,
    error,
    currentPage
  };
};
