import { ScrollView, Text, View } from "react-native";
import Constants from "expo-constants";

import { HorizontalList } from "@/components/UI/HorizontalList";
import useApi from "@/hooks/useApi";
import {
  fetchPopularMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "@/api/helper";

import FetchingError from "@/components/UI/FetchingError";

const HomeScreen = () => {
  const { data: trendingMovies, error: trendingError } =
    useApi(fetchTrendingMovies);
  const { data: upcomingMovies, error: upcomingError } =
    useApi(fetchUpcomingMovies);
  const { data: popularMovies, error: popularError } =
    useApi(fetchPopularMovies);

  if (trendingError || upcomingError || popularError) {
    return <FetchingError />;
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 8,
      }}
    >
      <HorizontalList.Container>
        <HorizontalList.Label>Trending</HorizontalList.Label>
        <HorizontalList.List data={trendingMovies} />
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
