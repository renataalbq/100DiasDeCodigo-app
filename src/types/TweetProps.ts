export type TweetProps = {
  id: string | number;
  content: string;
  tweeted_at: string;
  image?: string;
  replies_count?: number;
  likes_count?: number;
  impressions?: number;
  user: TweetUserProps;
};

export type TweetUserProps = {
  name: string;
  username: string;
  profile_avatar_url: string;
};
