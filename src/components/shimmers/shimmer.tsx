import { ReactNode } from 'react';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { ViewStyle } from 'react-native';

const ShimmerPlaceholder = createShimmerPlaceholder();

interface Props {
  children?: ReactNode;
  isLoading: boolean;
  style?: ViewStyle;
}

const Shimmer = ({ children, isLoading, style }: Props) => (
  <ShimmerPlaceholder
    shimmerColors={['#2323237e']}
    visible={!isLoading}
    shimmerStyle={[style, { borderRadius: 8 }]}
  >
    {children}
  </ShimmerPlaceholder>
);

export default Shimmer;
