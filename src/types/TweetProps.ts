export type TweetProps = {
  id: string | number;
  content: string;
  tweeted_at: string;
  medias: TweetMediaProps[];
  replies_count?: number;
  likes_count?: number;
  views_count?: number;
  user: TweetUserProps;
};

export type TweetUserProps = {
  name: string;
  username: string;
  profile_avatar_url: string;
};

export type TweetMediaProps = {
  id: number;
  media_type: string;
  thumbnail: string;
  payload: {
    variants: [
      medium?: string,
      url?: string,
    ]
  }
}
