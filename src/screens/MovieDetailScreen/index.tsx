import { Dimensions } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import Constants from "expo-constants";

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

const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  alwaysBounceVertical: false,
  bounces: false,
  overScrollMode: 'never'
}))`
  flex: 1;
  padding: 0px 8px 8px;
  margin-top: ${Constants.statusBarHeight * 1.75}px;
  margin-bottom: 8px;
`;

const PosterWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").width * 4/3}px;
`;

const Poster = styled.Image`
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: ${COLORS.secondary};
  font-weight: bold;
  font-size: 28px;
  text-align: left;
`;

const Synopsis = styled.Text`
  color: ${COLORS.text};
  font-weight: 500;
  font-size: 16px;
  text-align: justify;
  line-height: 20px;
`;

const InfoWrapper = styled.View`
  flex-direction: row;
  gap: 12px;
  margin: 6px 0px;
`;

const InfoText = styled.Text`
  color: ${COLORS.text};
  font-weight: 500;
  font-size: 20px;
`;

const VoteWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const VoteText = styled.Text`
  color: ${COLORS.text};
  font-weight: 600;
  font-size: 20px;
`;
