import { NavigationContainer } from "@react-navigation/native";

import MainTab from "@/navigation/MainTab";
import { LikedMoviesProvider } from "@/context/LikedMoviesContext";

export default function App() {
  return (
    <LikedMoviesProvider>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </LikedMoviesProvider>
  );
}
