import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import MainTab from "@/navigation/MainTab";
import { FavoriteMoviesProvider } from "@/context/FavoriteMoviesContext";
import COLORS from "@/constants/colors";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.primary,
    text: COLORS.text,
  },
};

export default function App() {
  return (
    <FavoriteMoviesProvider>
      <StatusBar style="light" />
      <NavigationContainer theme={MyTheme}>
        <MainTab />
      </NavigationContainer>
    </FavoriteMoviesProvider>
  );
}
