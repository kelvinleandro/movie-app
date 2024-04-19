import React, { useContext } from "react";
import { View, Text, Alert } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { logoutUser, deleteCurrentUser } from "@/utils/firebase";
import { AuthContext } from "@/context/AuthContext";
import COLORS from "@/constants/colors";

const SettingsScreen = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = async () => {
    Alert.alert("Log out", "Are you sure you want to log out?", [
      { text: "Cancel" },
      {
        text: "Log out",
        onPress: async () => {
          await logoutUser();
          authCtx.logout();
        },
      },
    ]);
  };

  const deleteAccountHandler = async () => {
    Alert.alert("Delete account?", "This action cannot be undone", [
      { text: "Cancel" },
      {
        text: "Delete",
        onPress: async () => {
          await deleteCurrentUser();
          authCtx.logout();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1, marginBottom: 8, alignItems: "center" }}>
      <Button
        onPress={logoutHandler}
        mode="contained"
        textColor={COLORS.text}
        buttonColor={COLORS.secondary}
        accessibilityLabel="Log out"
        style={{
          width: "90%",
          paddingVertical: 2,
          borderColor: COLORS.secondary,
          marginVertical: 8,
        }}
        labelStyle={{ fontSize: 18, fontWeight: "600" }}
      >
        Log out
      </Button>
      <Button
        onPress={deleteAccountHandler}
        mode="contained"
        textColor={COLORS.text}
        buttonColor="#c21d03"
        accessibilityLabel="Delete account"
        style={{
          width: "90%",
          paddingVertical: 2,
          borderColor: COLORS.secondary,
        }}
        labelStyle={{ fontSize: 18, fontWeight: "600" }}
      >
        Delete account
      </Button>
    </SafeAreaView>
  );
};

export default SettingsScreen;
