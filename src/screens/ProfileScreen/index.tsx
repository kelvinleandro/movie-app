import React from "react";
import { Text, View } from "react-native";
import Constants from "expo-constants";

import COLORS from "@/constants/colors";
import { ScreenView } from "@/components/UI/StyledComponents";
import UserDetail from "@/components/profile-screen/UserDetail";
import FavoriteList from "@/components/profile-screen/FavoriteList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileStackParamList } from "@/types/navigation";

type Props = NativeStackScreenProps<ProfileStackParamList, "Profile">;

const ProfileScreen = ({ navigation }: Props) => {
  const handleListItemPress = (id: number) => {
    navigation.navigate("MovieDetail", { id: id });
  };

  return (
    <ScreenView style={{ marginTop: Constants.statusBarHeight }}>
      <UserDetail />
      <View style={{paddingHorizontal: 12, width:"100%"}} >
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
        <FavoriteList onItemPress={handleListItemPress} />
      </View>
    </ScreenView>
  );
};

export default ProfileScreen;
