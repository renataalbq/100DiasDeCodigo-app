import { View } from 'react-native';
import Shimmer from './shimmer';
import React from 'react';
import { theme } from 'theme/theme';
interface TimelineShimmerProps {
  count: number;
}

const TimelineShimmer = (props: TimelineShimmerProps) => {
  const shimmerArray = new Array(props.count).fill(null);
  const { overlay } = theme.colors;

  return (
    <View style={{backgroundColor: overlay}}>
    {shimmerArray.map((_, index) => (
        <View key={index} style={{backgroundColor: '#3939392f', borderRadius: 8, margin: 10, height: 170}}>
          <View style={{flexDirection: 'row'}}>
            <Shimmer
              isLoading={true}
              style={{
                marginVertical: 5,
                marginHorizontal: 10,
                width: 36,
                height: 36,
                borderRadius: 50,
                marginTop: 10,
              }}
            /> 
              <Shimmer
                isLoading={true}
                style={{
                  marginHorizontal: 10,
                  width: '80%',
                  height: 10,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                }}
              />
          </View>
          <View>
          {shimmerArray.map((_, index) => (
  
            <Shimmer
                  key={index}
                  isLoading={true}
                  style={{
                    marginLeft: 60,
                    width: '80%',
                    height: 8,
                    marginVertical: 4,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                  }}
                />
          ))}
          </View>
        </View>
         ))}
         </View>
  );
};

export default TimelineShimmer;
