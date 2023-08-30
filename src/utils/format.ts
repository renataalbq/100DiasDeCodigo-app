export const formatTimeAgo = (timestamp: string) => {
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
