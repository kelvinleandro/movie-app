import React, { useContext, useEffect, useMemo, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useApi from "@/hooks/useApi";
import {
  ExploreStackParamList,
  HomeStackParamList,
  ProfileStackParamList,
} from "@/types/navigation";
import { formatRuntime, getTmdbImage } from "@/utils";
import COLORS from "@/constants/colors";
import HorizontalList from "@/components/UI/HorizontalList";
import { CastMember, Movie } from "@/types/api";
import {
  PosterWrapper,
  Poster,
  Title,
  Synopsis,
  DetailSection,
  ReleaseInfo,
  Info,
  Vote,
} from "./styles";
import { FavoriteMoviesContext } from "@/context/FavoriteMoviesContext";
import SkeletonMovieDetail from "@/components/UI/Skeleton/SkeletonMovieDetail";
import FetchingError from "@/components/UI/FetchingError";

type Props = NativeStackScreenProps<
  ExploreStackParamList | HomeStackParamList | ProfileStackParamList,
  "MovieDetail"
>;

const MovieDetailScreen = ({ navigation, route }: Props) => {
  const id = route.params.id;
  const {
    data: movie,
    isLoading: loadingMovie,
    error: errorMovie,
  } = useApi("fetchMovie", id);
  const {
    data: cast,
    isLoading: loadingCast,
    error: errorCast,
  } = useApi("fetchMovieCast", id);
  const {
    data: crew,
    isLoading: loadingCrew,
    error: errorCrew,
  } = useApi("fetchMovieCrew", id);
  const {
    data: similar,
    isLoading: loadingSimilar,
    error: errorSimilar,
  } = useApi("fetchSimilarMovies", id);
  const directors = useMemo(
    () => crew?.filter((member) => member.job === "Director") || [],
    [crew]
  );
  const writers = useMemo(
    () =>
      crew?.filter(
        (member) => member.job === "Writer" || member.job == "Screenplay"
      ) || [],
    [crew]
  );
  const favoriteContext = useContext(FavoriteMoviesContext);
  const isFavorite = favoriteContext.isFavorite(id);

  if (loadingMovie || loadingCast || loadingSimilar || loadingCrew) {
    return <SkeletonMovieDetail />;
  }

  if (errorMovie || errorCast || errorSimilar || errorCrew) {
    return <FetchingError />;
  }

  const favoriteHandler = () => {
    favoriteContext?.toggleFavorite(movie as Movie);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginBottom: 8,
      }}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <PosterWrapper>
          <Poster
            source={{
              uri: getTmdbImage(movie?.poster_path, "w500"),
            }}
            resizeMode="cover"
          />
        </PosterWrapper>

        <DetailSection>
          <Title>{movie?.title}</Title>

          <ReleaseInfo.Wrapper>
            <ReleaseInfo.Text>
              {movie?.release_date.slice(0, 4)}
            </ReleaseInfo.Text>
            <ReleaseInfo.Text>{formatRuntime(movie?.runtime)}</ReleaseInfo.Text>
            <Vote.Wrapper>
              <AntDesign name="star" size={20} color={COLORS.secondary} />
              <Vote.Text>{movie?.vote_average}/10</Vote.Text>
            </Vote.Wrapper>
          </ReleaseInfo.Wrapper>

          <Synopsis>{movie?.overview}</Synopsis>

          <View
            style={{ width: "100%", alignItems: "center", marginVertical: 12, gap: 12 }}
          >
            <Button
              mode="contained"
              icon="play"
              textColor={COLORS.primary}
              buttonColor={COLORS.text}
              onPress={() => {}}
              accessibilityLabel="Watch Now"
              style={{
                width: "95%",
                paddingVertical: 2,
                borderColor: COLORS.text,
                borderRadius: 12,
              }}
              labelStyle={{ fontSize: 18, fontWeight: "600" }}
            >
              Watch Now
            </Button>

            <Button
              mode={isFavorite ? "outlined" : "contained"}
              icon={isFavorite ? "close" : "plus"}
              textColor={isFavorite ? COLORS.secondary : COLORS.text}
              buttonColor={isFavorite ? "transparent" : COLORS.secondary}
              onPress={favoriteHandler}
              accessibilityLabel="Add to Favorites"
              style={{
                width: "95%",
                paddingVertical: 2,
                borderColor: COLORS.secondary,
                borderRadius: 12,
              }}
              labelStyle={{ fontSize: 18, fontWeight: "600" }}
            >
              {isFavorite ? "Remove from favorites" : "Add to Favorites"}
            </Button>
          </View>

          <Info.Wrapper>
            <Info.Label>Genres:</Info.Label>
            {movie?.genres.map((item, index) => (
              <React.Fragment key={index}>
                {index !== 0 && <Info.Item>·</Info.Item>}
                <Info.Item>{item.name}</Info.Item>
              </React.Fragment>
            ))}
          </Info.Wrapper>

          <Info.Wrapper>
            <Info.Label>
              {directors.length > 1 ? "Directors" : "Director"}:
            </Info.Label>
            {directors.map((item, index) => (
              <React.Fragment key={index}>
                {index !== 0 && <Info.Item>·</Info.Item>}
                <Info.Item>{item.name}</Info.Item>
              </React.Fragment>
            ))}
          </Info.Wrapper>

          <Info.Wrapper>
            <Info.Label>Screenplay:</Info.Label>
            {writers.map((item, index) => (
              <React.Fragment key={index}>
                {index !== 0 && <Info.Item>·</Info.Item>}
                <Info.Item>{item.name}</Info.Item>
              </React.Fragment>
            ))}
          </Info.Wrapper>

          <HorizontalList
            data={cast?.slice(0, 10) as CastMember[]}
            label="Cast"
            action={{
              text: "Full Cast",
              handler: () => {
                navigation.navigate("FullCast", { id: id });
              },
            }}
          />

          <HorizontalList
            data={similar}
            label="Similar Movies"
            itemClickHandler={(id: number) => {
              navigation.navigate("MovieDetail", { id: id });
            }}
          />
        </DetailSection>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetailScreen;
