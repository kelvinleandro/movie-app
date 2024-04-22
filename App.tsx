import { useContext, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";

import MainTab from "@/navigation/MainTab";
import AuthStack from "@/navigation/AuthStack";
import { FavoriteMoviesContext, FavoriteMoviesProvider } from "@/context/FavoriteMoviesContext";
import { AuthContext, AuthContextProvider } from "@/context/AuthContext";
import COLORS from "@/constants/colors";
import { getCurrentUserUid, getUserDoc } from "@/utils/firebase";
import { fetchMoviesByIds } from "@/api/helper";

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
  const favCtx = useContext(FavoriteMoviesContext);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  // useEffect(() => {
  //   const loadData = async () => {
  //     if (authCtx.isAuthenticated){
  //       const userDoc = await getUserDoc(getCurrentUserUid());
  //       const cloudMovies = await fetchMoviesByIds(userDoc.moviesId);
  //       if (cloudMovies.length > 0) {
  //         favCtx.setFavoriteMovies(cloudMovies);
  //       }
  //     }
  //   }
  //   loadData();
  // }, [authCtx.isAuthenticated]);

  useEffect(() => {
    const loadData = async () => {
      const userDoc = await getUserDoc(getCurrentUserUid());
      const cloudMovies = await fetchMoviesByIds(userDoc.moviesId);
      if (cloudMovies.length > 0) {
        favCtx.setFavoriteMovies(cloudMovies);
      }
    }

    const getToken = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        authCtx.authenticate(storedToken);
        await loadData();
      }
      setIsTryingLogin(false);
      SplashScreen.hideAsync();
    }
    getToken();
  }, [authCtx.isAuthenticated]);

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
          <SafeAreaProvider>
            <Root />
          </SafeAreaProvider>
        </FavoriteMoviesProvider>
      </AuthContextProvider>
    </PaperProvider>
  );
}
