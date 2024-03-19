import Constants from "expo-constants";

import HorizontalList from "@/components/UI/HorizontalList";
import useApi from "@/hooks/useApi";
import FetchingError from "@/components/UI/FetchingError";
import HeroSection from "@/components/home-screen/HeroSection";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "@/types/navigation";
import { ScreenView } from "@/components/UI/StyledComponents";

type Props = NativeStackScreenProps<HomeStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
  const { data: trendingMovies } = useApi("fetchTrendingMovies");
  const { data: upcomingMovies } = useApi("fetchUpcomingMovies");
  const { data: popularMovies } = useApi("fetchPopularMovies");
  const { data: nowPlayingMovies } = useApi("fetchNowPlayingMovies");

  const itemClickHandler = (id: number) => {
    navigation.navigate("MovieDetail", { id: id });
  };

  if (
    !trendingMovies ||
    !upcomingMovies ||
    !popularMovies ||
    !nowPlayingMovies
  ) {
    return <FetchingError />;
  }

  return (
    <ScreenView
      style={{
        marginTop: Constants.statusBarHeight * 1.2,
        paddingHorizontal: 8,
        marginBottom: 8,
      }}
      contentContainerStyle={{
        alignItems: "center",
      }}
    >
      <HeroSection onPress={itemClickHandler} />

      <HorizontalList
        data={trendingMovies}
        label="Trending"
        itemClickHandler={itemClickHandler}
      />

      <HorizontalList
        data={nowPlayingMovies}
        label="Now Playing"
        itemClickHandler={itemClickHandler}
      />

      <HorizontalList
        data={upcomingMovies}
        label="Upcoming"
        itemClickHandler={itemClickHandler}
      />

      <HorizontalList
        data={popularMovies}
        label="Popular"
        itemClickHandler={itemClickHandler}
      />
    </ScreenView>
  );
};

export default HomeScreen;
