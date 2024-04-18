import { useContext, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";

import MainTab from "@/navigation/MainTab";
import AuthStack from "@/navigation/AuthStack";
import { FavoriteMoviesProvider } from "@/context/FavoriteMoviesContext";
import { AuthContext, AuthContextProvider } from "@/context/AuthContext";
import COLORS from "@/constants/colors";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.primary,
    text: COLORS.text,
  },
};

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer theme={MyTheme}>
      {isAuthenticated ? <MainTab /> : <AuthStack />}
    </NavigationContainer>
  );
};

const Root = () => {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    async function getToken() {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      setIsTryingLogin(false);
      SplashScreen.hideAsync();
    }
    getToken();
  }, []);

  if (isTryingLogin) {
    return null;
  }

  return <Navigation />;
};

export default function App() {
  return (
    <PaperProvider>
      <AuthContextProvider>
        <FavoriteMoviesProvider>
          <StatusBar
            barStyle={"light-content"}
            backgroundColor={COLORS.primary}
          />
          {/* <NavigationContainer theme={MyTheme}> */}
          <SafeAreaProvider>
            {/* <MainTab /> */}
            <Root />
          </SafeAreaProvider>
          {/* </NavigationContainer> */}
        </FavoriteMoviesProvider>
      </AuthContextProvider>
    </PaperProvider>
  );
}
