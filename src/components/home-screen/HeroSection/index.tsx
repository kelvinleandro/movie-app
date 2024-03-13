import { Dimensions } from "react-native";
import React from "react";
import useApi from "@/hooks/useApi";
import { fetchCategories, fetchRandomPopularMovie } from "@/api/helper";
import styled from "styled-components/native";
import { getTmdbImage } from "@/utils";
import COLORS from "@/constants/colors";

const HeroSection = () => {
  const { data: movie } = useApi(fetchRandomPopularMovie);
  // const { data: genreList} = useApi(fetchCategories);

  return (
    <Container>
      <Background
        source={{
          uri: getTmdbImage(movie?.poster_path, "w500"),
        }}
        resizeMode="cover"
      >
        <Title>{movie?.title}</Title>
      </Background>
    </Container>
  );
};

export default HeroSection;

const Container = styled.View`
  width: ${Dimensions.get("window").width * 0.8}px;
  height: ${Dimensions.get("window").width * 0.8 * 5 / 4}px;
  margin-top: 16px;
`;

const Title = styled.Text`
  color: ${COLORS.text};
  font-size: 22px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
`;

const Background = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
