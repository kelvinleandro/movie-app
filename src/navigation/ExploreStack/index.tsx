import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ExploreStackParamList } from "@/types/navigation";
import ExploreScreen from "@/screens/ExploreScreen";
import MovieDetailScreen from "@/screens/MovieDetailScreen";
import FullCastScreen from "@/screens/FullCastScreen";

const Stack = createNativeStackNavigator<ExploreStackParamList>();

const ExploreStack = () => {
  return (
    <Stack.Navigator
    >
      <Stack.Screen name="Explore" component={ExploreScreen} options={{headerShown: false}} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
      <Stack.Screen name="FullCast" component={FullCastScreen} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
