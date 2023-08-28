import { EvilIcons } from '@expo/vector-icons';
import { Container, FooterCounter } from './footer-tweet.style';

type FooterTweetProps = {
  icon: React.ComponentProps<typeof EvilIcons>['name'];
  text?: number;
};

export const FooterTweet = ({ icon, text }: FooterTweetProps) => {
  return (
    <Container>
      <EvilIcons name={icon} size={22} color="gray" />
      <FooterCounter>{text}</FooterCounter>
    </Container>
  );
};

