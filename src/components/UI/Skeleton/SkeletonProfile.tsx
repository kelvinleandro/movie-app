import { View, Dimensions } from "react-native";
import React from "react";
import Constants from "expo-constants";
import ContentLoader, { Rect } from "react-content-loader/native";
import COLORS from "@/constants/colors";

const SPEED = 1.25;

const ThreeItemSkeleton = () => {
  return (
    <ContentLoader
      speed={SPEED}
      width="100%"
      height={(Dimensions.get("window").width * 0.275 * 4) / 3}
      backgroundColor={COLORS.skeletonBackground}
      foregroundColor={COLORS.skeletonForeground}
      style={{ marginBottom: 16 }}
    >
      {/* item skeleton */}
      <Rect
        x={8}
        y={0}
        rx={Dimensions.get("window").width * 0.03}
        ry={Dimensions.get("window").width * 0.03}
        width={Dimensions.get("window").width * 0.275}
        height={(Dimensions.get("window").width * 0.275 * 4) / 3}
      />

      {/* item skeleton */}
      <Rect
        x={8 + (Dimensions.get("window").width * 0.275 + 16)}
        y={0}
        rx={Dimensions.get("window").width * 0.03}
        ry={Dimensions.get("window").width * 0.03}
        width={Dimensions.get("window").width * 0.275}
        height={(Dimensions.get("window").width * 0.275 * 4) / 3}
      />

      {/* item skeleton */}
      <Rect
        x={(Dimensions.get("window").width * 0.275 + 16) * 2 + 8}
        y={0}
        rx={Dimensions.get("window").width * 0.03}
        ry={Dimensions.get("window").width * 0.03}
        width={Dimensions.get("window").width * 0.275}
        height={(Dimensions.get("window").width * 0.275 * 4) / 3}
      />
    </ContentLoader>
  );
};

const SkeletonProfile = () => {
  return (
    <View
      style={{
        flex: 1,
        // marginTop: Constants.statusBarHeight * 1.2,
        // paddingHorizontal: 8,
        marginBottom: 8,
        alignItems: "center",
      }}
    >
      {/* hero section skeleton */}
      <ContentLoader
        speed={SPEED}
        width={Dimensions.get("window").width}
        height={Dimensions.get("window").height * 0.175}
        style={{ marginBottom: 16 }}
        backgroundColor={COLORS.skeletonBackground}
        foregroundColor={COLORS.skeletonForeground}
      >
        <Rect x={0} y={0} height="100%" width="100%" />
      </ContentLoader>

      <ContentLoader
        speed={SPEED}
        width="100%"
        height={30}
        backgroundColor={COLORS.skeletonBackground}
        foregroundColor={COLORS.skeletonForeground}
        style={{ marginBottom: 16 }}
      >
        <Rect x={12} y={0} height="100%" width={Dimensions.get("window").width * 0.4} />

      </ContentLoader>

      <ThreeItemSkeleton />
      <ThreeItemSkeleton />
    </View>
  );
};

export default SkeletonProfile;
