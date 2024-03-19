import React from "react";
import { Text } from "react-native";
import Constants from "expo-constants";

import COLORS from "@/constants/colors";
import { ScreenView } from "@/components/UI/StyledComponents";
import UserDetail from "@/components/profile-screen/UserDetail";
import FavoriteList from "@/components/profile-screen/FavoriteList";

const ProfileScreen = () => {
  return (
    <ScreenView style={{ marginTop: Constants.statusBarHeight }}>
      <UserDetail />
      <Text
        style={{
          color: COLORS.secondary,
          fontSize: 32,
          fontWeight: "bold",
          marginVertical: 12,
        }}
      >
        Favorite Movies
      </Text>
      <FavoriteList />
    </ScreenView>
  );
};

export default ProfileScreen;
