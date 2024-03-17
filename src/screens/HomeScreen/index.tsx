import { ScrollView } from "react-native";
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
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "@/types/navigation";

type Props = NativeStackScreenProps<HomeStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
  const { data: trendingMovies } = useApi(fetchTrendingMovies);
  const { data: upcomingMovies } = useApi(fetchUpcomingMovies);
  const { data: popularMovies } = useApi(fetchPopularMovies);
  const { data: nowPlayingMovies } = useApi(fetchNowPlayingMovies);

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
    <ScrollView
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight * 1.75,
        paddingBottom: 8,
        paddingHorizontal: 8,
        marginBottom: 8,
      }}
      contentContainerStyle={{
        alignItems: "center",
      }}
      alwaysBounceVertical={false}
      bounces={false}
      overScrollMode={"never"}
    >
      <HeroSection onPress={itemClickHandler} />

      <HorizontalList.Container>
        <HorizontalList.Label>Trending</HorizontalList.Label>
        <HorizontalList.List
          data={trendingMovies}
          itemClickHandler={itemClickHandler}
        />
      </HorizontalList.Container>

      <HorizontalList.Container>
        <HorizontalList.Label>Now Playing</HorizontalList.Label>
        <HorizontalList.List
          data={nowPlayingMovies}
          itemClickHandler={itemClickHandler}
        />
      </HorizontalList.Container>

      <HorizontalList.Container>
        <HorizontalList.Label>Upcoming</HorizontalList.Label>
        <HorizontalList.List
          data={upcomingMovies}
          itemClickHandler={itemClickHandler}
        />
      </HorizontalList.Container>

      <HorizontalList.Container>
        <HorizontalList.Label>Popular</HorizontalList.Label>
        <HorizontalList.List
          data={popularMovies}
          itemClickHandler={itemClickHandler}
        />
      </HorizontalList.Container>
    </ScrollView>
  );
};

export default HomeScreen;
