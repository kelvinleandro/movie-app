import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
    <PaperProvider>
      <FavoriteMoviesProvider>
        <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />
        <NavigationContainer theme={MyTheme}>
          <SafeAreaProvider>
            <MainTab />
          </SafeAreaProvider>
        </NavigationContainer>
      </FavoriteMoviesProvider>
    </PaperProvider>
  );
}
