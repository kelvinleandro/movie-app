import React, { useContext } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { View } from "react-native";

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
  InfoWrapper,
  InfoText,
  VoteWrapper,
  VoteText,
  DetailSection,
} from "./styles";
import { ScreenView } from "@/components/UI/StyledComponents";
import { FavoriteMoviesContext } from "@/context/FavoriteMoviesContext";

type Props = NativeStackScreenProps<
  ExploreStackParamList | HomeStackParamList | ProfileStackParamList,
  "MovieDetail"
>;

const MovieDetailScreen = ({ navigation, route }: Props) => {
  const id = route.params.id;
  const { data: movie } = useApi("fetchMovie", id);
  const { data: cast } = useApi("fetchMovieCast", id);
  const { data: similar } = useApi("fetchSimilarMovies", id);
  const favoriteContext = useContext(FavoriteMoviesContext);
  const isFavorite = favoriteContext?.favoriteMovies.includes(movie as Movie);

  return (
    <ScreenView>
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

        <InfoWrapper>
          <InfoText>{movie?.release_date.slice(0, 4)}</InfoText>
          <InfoText>{formatRuntime(movie?.runtime)}</InfoText>
          <VoteWrapper>
            <AntDesign name="star" size={20} color={COLORS.secondary} />
            <VoteText>{movie?.vote_average}/10</VoteText>
          </VoteWrapper>
        </InfoWrapper>

        <Synopsis>{movie?.overview}</Synopsis>

        <View
          style={{ width: "100%", alignItems: "center", marginVertical: 12 }}
        >
          <Button
            mode={isFavorite ? "outlined" : "contained"}
            icon={isFavorite ? "close" : "plus"}
            textColor={isFavorite ? COLORS.secondary : COLORS.text}
            buttonColor={isFavorite ? "transparent" : COLORS.secondary}
            onPress={() => favoriteContext?.toggleFavorite(movie as Movie)}
            accessibilityLabel="Add to Favorites"
            style={{
              width: "90%",
              paddingVertical: 2,
              borderColor: COLORS.secondary,
            }}
            labelStyle={{ fontSize: 18, fontWeight: "600" }}
          >
            {isFavorite ? "Remove from favorites" : "Add to Favorites"}
          </Button>
        </View>

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
    </ScreenView>
  );
};

export default MovieDetailScreen;
