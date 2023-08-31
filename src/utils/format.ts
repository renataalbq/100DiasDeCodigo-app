import {
  differenceInHours,
  differenceInMinutes,
  differenceInDays
} from 'date-fns';

const MINUTES_IN_HOUR = 60;
const HOURS_IN_A_DAY = 24;

export const formatTimeAgo = (timestamp: string) => {
  const now = new Date();
  const tweetedAt = new Date(timestamp);

  const hoursDiff = differenceInHours(now, tweetedAt);
  const minutesDiff = differenceInMinutes(now, tweetedAt) % MINUTES_IN_HOUR;

  if (hoursDiff > HOURS_IN_A_DAY) {
    return `${differenceInDays(now, tweetedAt)}d`;
  }

  return hoursDiff > 0 && minutesDiff !== 0
    ? `${hoursDiff}h ${minutesDiff}min`
    : `${minutesDiff}min`;
};
