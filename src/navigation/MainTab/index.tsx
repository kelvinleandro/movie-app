import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainTabParamList } from "@/types/navigation";
import HomeStack from "../HomeStack";
import ExploreStack from "../ExploreStack";
import ProfileStack from "../ProfileStack";

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="ExploreTab" component={ExploreStack} />
      <Tab.Screen name="ProfileTab" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default MainTab