import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ExploreStackParamList } from '@/types/navigation';
import ExploreScreen from '@/screens/ExploreScreen';
import MovieDetailScreen from '@/screens/MovieDetailScreen';

const Stack = createNativeStackNavigator<ExploreStackParamList>();
const ExploreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
}

export default ExploreStack