import { View, Dimensions } from "react-native";
import React from "react";
import Constants from "expo-constants";
import ContentLoader, { Rect } from "react-content-loader/native";

const SPEED = 2;

const SkeletonHome = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight * 1.2,
        paddingHorizontal: 8,
        marginBottom: 8,
        alignItems: "center",
      }}
    >
      <ContentLoader
        speed={SPEED}
        width={Dimensions.get("window").width * 0.8}
        height={(Dimensions.get("window").width * 0.8 * 3) / 2}
        style={{ marginBottom: 16 }}
      >
        <Rect
          x={0}
          y={0}
          rx={Dimensions.get("window").width * 0.04}
          ry={Dimensions.get("window").width * 0.04}
          height="100%"
          width="100%"
        />
      </ContentLoader>

      <ContentLoader
        speed={SPEED}
        width={Dimensions.get("window").width}
        height={50 + (Dimensions.get("window").width * 4) / 9}
      >
        <Rect
          x={0}
          y={0}
          height={22}
          width={Dimensions.get("window").width * 0.25}
        />
        <Rect
          x={0}
          y={35}
          rx={Dimensions.get("window").width * 0.03}
          ry={Dimensions.get("window").width * 0.03}
          width={Dimensions.get("window").width / 3}
          height={(Dimensions.get("window").width * 4) / 9}
        />
        <Rect
          x={Dimensions.get("window").width / 3 + 16}
          y={35}
          rx={Dimensions.get("window").width * 0.03}
          ry={Dimensions.get("window").width * 0.03}
          width={Dimensions.get("window").width / 3}
          height={(Dimensions.get("window").width * 4) / 9}
        />

        <Rect
          x={2 * (Dimensions.get("window").width / 3 + 16)}
          y={35}
          rx={Dimensions.get("window").width * 0.03}
          ry={Dimensions.get("window").width * 0.03}
          width={Dimensions.get("window").width / 3}
          height={(Dimensions.get("window").width * 4) / 9}
        />
      </ContentLoader>
    </View>
  );
};

export default SkeletonHome;
