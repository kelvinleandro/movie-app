import React from "react";
import Constants from "expo-constants";

import UserDetail from "@/components/profile-screen/UserDetail";
import { ScreenView } from "@/components/UI/StyledComponents";

const ProfileScreen = () => {
  return (
    <ScreenView style={{ marginTop: Constants.statusBarHeight }}>
      <UserDetail />
    </ScreenView>
  );
};

export default ProfileScreen;
