import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ProfileStackParamList } from "@/types/navigation";
import ProfileScreen from "@/screens/ProfileScreen/";
import MovieDetailScreen from "@/screens/MovieDetailScreen";
import FullCastScreen from "@/screens/FullCastScreen";
import COLORS from "@/constants/colors";
import { logoutUser } from "@/utils/firebase";
import { AuthContext } from "@/context/AuthContext";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.secondary,
        headerTitle: "",
      }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: "Profile",
          headerTitleAlign: "center",
          headerRight: () => (
            <MaterialCommunityIcons
              name="logout"
              color={COLORS.secondary}
              size={24}
              onPress={() => {
                logoutUser();
                authCtx.logout();
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
      <Stack.Screen name="FullCast" component={FullCastScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
