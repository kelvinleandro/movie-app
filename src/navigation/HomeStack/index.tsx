import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeStackParamList } from "@/types/navigation";
import HomeScreen from "@/screens/HomeScreen";
import MovieDetailScreen from "@/screens/MovieDetailScreen";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
