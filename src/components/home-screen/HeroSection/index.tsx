import { Dimensions } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

import useApi from "@/hooks/useApi";
import { fetchCategories, fetchRandomPopularMovie } from "@/api/helper";
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
        <GradientOverlay
          colors={['transparent', 'rgba(0,0,0,0.7)']} // Gradient from transparent to black
          locations={[0.6, 0.85]}
          start={{x: 0, y: 0}} // Top
          end={{x: 0, y: 1}} // Bottom
        />
        <Title>{movie?.title}</Title>
      </Background>
    </Container>
  );
};

export default HeroSection;

const Container = styled.View`
  width: ${Dimensions.get("window").width * 0.8}px;
  height: ${Dimensions.get("window").width * 0.8 * 3 / 2}px;
  margin: 16px 0px;
  border-radius: 10px;
  border: 4px solid ${COLORS.secondary};
`;

const Background = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  width: "100%";
  height: "100%";
`;

const Title = styled.Text`
  color: ${COLORS.text};
  font-size: 22px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
`;

const GradientOverlay = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
