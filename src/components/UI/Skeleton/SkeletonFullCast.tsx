import { View, Dimensions } from "react-native";
import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import COLORS from "@/constants/colors";

const SPEED = 1.25;

const SkeletonFullCast = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 12,
      }}
    >
      {/* full cast title skeleton */}
      <ContentLoader
        speed={SPEED}
        width="100%"
        height={32}
        backgroundColor={COLORS.skeletonBackground}
        foregroundColor={COLORS.skeletonForeground}
        style={{ marginBottom: 12 }}
      >
        <Rect x={0} y={0} height="100%" width="50%" />
      </ContentLoader>

      {/* list item skeleton */}
      <ContentLoader
        speed={SPEED}
        width="100%"
        height={Dimensions.get("window").width * 0.4 + 12}
        backgroundColor={COLORS.skeletonBackground}
        foregroundColor={COLORS.skeletonForeground}
        style={{ marginBottom: 12 }}
      >
        {/* list image skeleton */}
        <Rect
          x={0}
          y={0}
          rx={Dimensions.get("window").width * 0.03}
          ry={Dimensions.get("window").width * 0.03}
          width={Dimensions.get("window").width * 0.3}
          height={Dimensions.get("window").width * 0.4}
        />

        {/* list name skeleton */}
        <Rect
          x={Dimensions.get("window").width * 0.3 + 24}
          y="35%"
          height={20}
          width={Dimensions.get("window").width * 0.4}
        />

        {/* list character skeleton */}
        <Rect
          x={Dimensions.get("window").width * 0.3 + 24}
          y="50%"
          height={16}
          width={Dimensions.get("window").width * 0.25}
        />
      </ContentLoader>

      {/* list item skeleton */}
      <ContentLoader
        speed={SPEED}
        width="100%"
        height={Dimensions.get("window").width * 0.4 + 12}
        backgroundColor={COLORS.skeletonBackground}
        foregroundColor={COLORS.skeletonForeground}
        style={{ marginBottom: 12 }}
      >
        {/* list image skeleton */}
        <Rect
          x={0}
          y={0}
          rx={Dimensions.get("window").width * 0.03}
          ry={Dimensions.get("window").width * 0.03}
          width={Dimensions.get("window").width * 0.3}
          height={Dimensions.get("window").width * 0.4}
        />

        {/* list name skeleton */}
        <Rect
          x={Dimensions.get("window").width * 0.3 + 24}
          y="35%"
          height={20}
          width={Dimensions.get("window").width * 0.4}
        />

        {/* list character skeleton */}
        <Rect
          x={Dimensions.get("window").width * 0.3 + 24}
          y="50%"
          height={16}
          width={Dimensions.get("window").width * 0.25}
        />
      </ContentLoader>

      {/* list item skeleton */}
      <ContentLoader
        speed={SPEED}
        width="100%"
        height={Dimensions.get("window").width * 0.4 + 12}
        backgroundColor={COLORS.skeletonBackground}
        foregroundColor={COLORS.skeletonForeground}
        style={{ marginBottom: 12 }}
      >
        {/* list image skeleton */}
        <Rect
          x={0}
          y={0}
          rx={Dimensions.get("window").width * 0.03}
          ry={Dimensions.get("window").width * 0.03}
          width={Dimensions.get("window").width * 0.3}
          height={Dimensions.get("window").width * 0.4}
        />

        {/* list name skeleton */}
        <Rect
          x={Dimensions.get("window").width * 0.3 + 24}
          y="35%"
          height={20}
          width={Dimensions.get("window").width * 0.4}
        />

        {/* list character skeleton */}
        <Rect
          x={Dimensions.get("window").width * 0.3 + 24}
          y="50%"
          height={16}
          width={Dimensions.get("window").width * 0.25}
        />
      </ContentLoader>

      {/* list item skeleton */}
      <ContentLoader
        speed={SPEED}
        width="100%"
        height={Dimensions.get("window").width * 0.4 + 12}
        backgroundColor={COLORS.skeletonBackground}
        foregroundColor={COLORS.skeletonForeground}
        style={{ marginBottom: 12 }}
      >
        {/* list image skeleton */}
        <Rect
          x={0}
          y={0}
          rx={Dimensions.get("window").width * 0.03}
          ry={Dimensions.get("window").width * 0.03}
          width={Dimensions.get("window").width * 0.3}
          height={Dimensions.get("window").width * 0.4}
        />

        {/* list name skeleton */}
        <Rect
          x={Dimensions.get("window").width * 0.3 + 24}
          y="35%"
          height={20}
          width={Dimensions.get("window").width * 0.4}
        />

        {/* list character skeleton */}
        <Rect
          x={Dimensions.get("window").width * 0.3 + 24}
          y="50%"
          height={16}
          width={Dimensions.get("window").width * 0.25}
        />
      </ContentLoader>
    </View>
  );
};

export default SkeletonFullCast;
