import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";

import useApi from "@/hooks/useApi";
import { fetchMovie, fetchMovieCast, fetchSimilarMovies } from "@/api/helper";
import {
  ExploreStackParamList,
  HomeStackParamList,
  ProfileStackParamList,
} from "@/types/navigation";
import { formatRuntime, getTmdbImage } from "@/utils";
import COLORS from "@/constants/colors";
import { HorizontalList } from "@/components/UI/HorizontalList";
import { CastMember } from "@/types/api";
import {
  Container,
  PosterWrapper,
  Poster,
  Title,
  Synopsis,
  InfoWrapper,
  InfoText,
  VoteWrapper,
  VoteText,
} from "./styles";

type Props = NativeStackScreenProps<
  ExploreStackParamList | HomeStackParamList | ProfileStackParamList,
  "MovieDetail"
>;

const MovieDetailScreen = ({ navigation, route }: Props) => {
  const id: number = route.params.id;
  const { data: movie } = useApi(fetchMovie, id);
  const { data: cast } = useApi(fetchMovieCast, id);
  const { data: similar } = useApi(fetchSimilarMovies, id);

  return (
    <Container>
      <PosterWrapper>
        <Poster
          source={{
            uri: getTmdbImage(movie?.poster_path, "w500"),
          }}
          resizeMode="cover"
        />
      </PosterWrapper>

      <Title>{movie?.title}</Title>

      <InfoWrapper>
        <InfoText>{movie?.release_date.slice(0, 4)}</InfoText>

        <InfoText>{formatRuntime(movie?.runtime)}</InfoText>

        <VoteWrapper>
          <AntDesign name="star" size={20} color={COLORS.secondary} />
          <VoteText>{movie?.vote_average}/10</VoteText>
        </VoteWrapper>
      </InfoWrapper>

      <Synopsis>{movie?.overview}</Synopsis>

      <HorizontalList.Container>
        <HorizontalList.Label>Cast</HorizontalList.Label>
        <HorizontalList.List data={cast?.slice(0, 10) as CastMember[]} />
      </HorizontalList.Container>

      <HorizontalList.Container>
        <HorizontalList.Label>Similar Movies</HorizontalList.Label>
        <HorizontalList.List
          data={similar}
          itemClickHandler={(id: number) => {
            navigation.navigate("MovieDetail", { id: id });
          }}
        />
      </HorizontalList.Container>
    </Container>
  );
};

export default MovieDetailScreen;
