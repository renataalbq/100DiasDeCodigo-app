import React from "react";
import { Shimmer } from "./shimmer";

interface TimelineShimmerProps {
    count: number
}

export const TimelineShimmer = (props: TimelineShimmerProps) => {
    const shimmerArray = new Array(props.count).fill(null);
  
    return (
      <>
        {shimmerArray.map((_, index) => (
          <Shimmer
            key={index}
            isLoading={true}
            style={{
              marginTop: 20,
              marginHorizontal: 10,
              width: '90%',
              height: 150,
              alignSelf: 'center',
              justifyContent: 'center',
            }}
          />
        ))}
      </>
    );
};