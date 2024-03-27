import { View, Dimensions } from "react-native";
import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import COLORS from "@/constants/colors";

const SPEED = 1.25;

const SkeletonMovieDetail = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* poster skeleton */}
      <ContentLoader
        speed={SPEED}
        width={Dimensions.get("window").width}
        height={(Dimensions.get("window").width * 4) / 3}
        backgroundColor={COLORS.skeletonBackground}
        foregroundColor={COLORS.skeletonForeground}
      >
        <Rect
          x={0}
          y={0}
          height="100%"
          width="100%"
        />
      </ContentLoader>


      {/* detail section skeleton */}
      <ContentLoader
        speed={SPEED}
        width={Dimensions.get("window").width}
        height="100%"
        backgroundColor={COLORS.skeletonBackground}
        foregroundColor={COLORS.skeletonForeground}
        style={{marginTop: 12, paddingHorizontal: 12}}
      >
        {/* movie title skeleton */}
        <Rect
          x={0}
          y={0}
          height={24}
          width={Dimensions.get("window").width * 0.4}
        />

        {/* info skeleton */}
        <Rect
          x={0}
          y={36}
          height={20}
          width={Dimensions.get("window").width * 0.55}
        />

        {/* synopsis skeleton */}
        <Rect
          x={0}
          y={68}
          height={18}
          width="100%"
        />
        <Rect
          x={0}
          y={98}
          height={18}
          width="100%"
        />
        <Rect
          x={0}
          y={128}
          height={18}
          width="100%"
        />
      </ContentLoader>
    </View>
  );
};

export default SkeletonMovieDetail;
