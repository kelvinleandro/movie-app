import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProfileStackParamList } from "@/types/navigation";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

import ProfileScreen from "@/screens/ProfileScreen/";
import MovieDetailScreen from "@/screens/MovieDetailScreen";
import FullCastScreen from "@/screens/FullCastScreen";
import COLORS from "@/constants/colors";

const ProfileStack = () => {
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
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
      <Stack.Screen name="FullCast" component={FullCastScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
