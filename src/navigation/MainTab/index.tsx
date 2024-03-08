import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import HomeStack from "../HomeStack";
import ExploreStack from "../ExploreStack";
import ProfileStack from "../ProfileStack";

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