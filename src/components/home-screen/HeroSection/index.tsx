import { Dimensions, Pressable } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import useApi from "@/hooks/useApi";
import { fetchRandomPopularMovie } from "@/api/helper";
import { getTmdbImage } from "@/utils";
import COLORS from "@/constants/colors";
import GenreList from "../GenreList";

const HeroSection = ({ onPress }: { onPress?: (id: number) => void }) => {
  const { data: movie } = useApi(fetchRandomPopularMovie);

  return (
    <Pressable onPress={onPress?.bind(this, movie?.id as number)}>
      <Container>
        <Background
          source={{
            uri: getTmdbImage(movie?.poster_path, "w500"),
          }}
          resizeMode="cover"
        >
          <GradientOverlay
            colors={["transparent", "rgba(0,0,0,0.7)"]}
            locations={[0.6, 0.85]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <ContentContainer>
              {/* <GenreList list={movie?.genre_ids as number[]} /> */}
              <Title>{movie?.title}</Title>
            </ContentContainer>
          </GradientOverlay>
        </Background>
      </Container>
    </Pressable>
  );
};

export default HeroSection;

const Container = styled.View`
  width: ${Dimensions.get("window").width * 0.8}px;
  height: ${(Dimensions.get("window").width * 0.8 * 3) / 2}px;
  margin: 16px 0px;
  border-radius: ${Dimensions.get("window").width * 0.04}px;
  border: 4px solid ${COLORS.secondary};
  overflow: hidden;
`;

const Background = styled.ImageBackground`
  flex: 1;
  width: "100%";
  height: "100%";
`;

const GradientOverlay = styled(LinearGradient)`
  flex: 1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: flex-end;
  align-items: center;
  padding: 18px 12px;
`;

const ContentContainer = styled.View`
  align-self: stretch;
  align-items: center;
  gap: 10px;
`;

const Title = styled.Text`
  color: ${COLORS.text};
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
`;
