import { ScrollView, Text, View } from "react-native";
import Constants from "expo-constants";

import { HorizontalList } from "@/components/UI/HorizontalList";
import useApi from "@/hooks/useApi";
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "@/api/helper";
import FetchingError from "@/components/UI/FetchingError";
import HeroSection from "@/components/home-screen/HeroSection";

const HomeScreen = () => {
  const { data: trendingMovies } = useApi(fetchTrendingMovies);
  const { data: upcomingMovies } = useApi(fetchUpcomingMovies);
  const { data: popularMovies } = useApi(fetchPopularMovies);
  const { data: nowPlayingMovies } = useApi(fetchNowPlayingMovies);

  if (
    !trendingMovies ||
    !upcomingMovies ||
    !popularMovies ||
    !nowPlayingMovies
  ) {
    return <FetchingError />;
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        paddingBottom: 8,
        paddingHorizontal: 8,
      }}
      contentContainerStyle={{
        alignItems: "center",
      }}
    >
      <HeroSection />

      <HorizontalList.Container>
        <HorizontalList.Label>Trending</HorizontalList.Label>
        <HorizontalList.List data={trendingMovies} />
      </HorizontalList.Container>

      <HorizontalList.Container>
        <HorizontalList.Label>Now Playing</HorizontalList.Label>
        <HorizontalList.List data={nowPlayingMovies} />
      </HorizontalList.Container>

      <HorizontalList.Container>
        <HorizontalList.Label>Upcoming</HorizontalList.Label>
        <HorizontalList.List data={upcomingMovies} />
      </HorizontalList.Container>

      <HorizontalList.Container>
        <HorizontalList.Label>Popular</HorizontalList.Label>
        <HorizontalList.List data={popularMovies} />
      </HorizontalList.Container>
    </ScrollView>
  );
};

export default HomeScreen;
