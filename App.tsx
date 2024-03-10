import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import MainTab from "@/navigation/MainTab";
import { LikedMoviesProvider } from "@/context/LikedMoviesContext";
import COLORS from "@/constants/colors";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.primary,
    text: COLORS.text
  },
};

export default function App() {
  return (
    <LikedMoviesProvider >
      <StatusBar style="light" />
      <NavigationContainer theme={MyTheme}>
        <MainTab />
      </NavigationContainer>
    </LikedMoviesProvider>
  );
}
