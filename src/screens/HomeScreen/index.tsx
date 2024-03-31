import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import HorizontalList from "@/components/UI/HorizontalList";
import useApi from "@/hooks/useApi";
import FetchingError from "@/components/UI/FetchingError";
import HeroSection from "@/components/home-screen/HeroSection";
import { HomeStackParamList } from "@/types/navigation";
import SkeletonHome from "@/components/UI/Skeleton/SkeletonHome";
import { ScrollView } from "react-native";

type Props = NativeStackScreenProps<HomeStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
  const { data: trendingMovies, isLoading: loadingTrending } = useApi(
    "fetchTrendingMovies"
  );
  const { data: upcomingMovies, isLoading: loadingUpcoming } = useApi(
    "fetchUpcomingMovies"
  );
  const { data: popularMovies, isLoading: loadingPopular } =
    useApi("fetchPopularMovies");
  const { data: nowPlayingMovies, isLoading: loadingNowPlaying } = useApi(
    "fetchNowPlayingMovies"
  );

  const itemClickHandler = (id: number) => {
    navigation.navigate("MovieDetail", { id: id });
  };

  if (loadingTrending || loadingUpcoming || loadingPopular || loadingNowPlaying){
    return <SkeletonHome />;
  }

  if (
    !trendingMovies ||
    !upcomingMovies ||
    !popularMovies ||
    !nowPlayingMovies
  ) {
    return <FetchingError />;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 12,
        marginBottom: 8,
      }}
    >
      <ScrollView style={{flex: 1 }} contentContainerStyle={{alignItems: "center"}} >
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
