import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ExploreStackParamList } from "@/types/navigation";
import ExploreScreen from "@/screens/ExploreScreen";
import MovieDetailScreen from "@/screens/MovieDetailScreen";
import FullCastScreen from "@/screens/FullCastScreen";
import COLORS from "@/constants/colors";
import SearchScreen from "@/screens/SearchScreen";

const Stack = createNativeStackNavigator<ExploreStackParamList>();

const ExploreStack = () => {
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
        name="Explore"
        component={ExploreScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
      <Stack.Screen name="FullCast" component={FullCastScreen} />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

export default ExploreStack;
