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
    shimmerColors={['#1f1f1f', '#232323' ]}
    visible={!isLoading}
    shimmerStyle={[style]}
  >
    {children}
  </ShimmerPlaceholder>
);

export default Shimmer;
