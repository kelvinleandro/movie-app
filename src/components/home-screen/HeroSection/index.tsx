import { Pressable } from "react-native";
import React from "react";

import useApi from "@/hooks/useApi";
import { getTmdbImage } from "@/utils";
import {
  Background,
  Container,
  ContentContainer,
  GradientOverlay,
  Title,
} from "./styles";
import GenreList from "../GenreList";
import COLORS from "@/constants/colors";

const HeroSection = ({ onPress }: { onPress?: (id: number) => void }) => {
  const { data: movie } = useApi("fetchRandomPopularMovie");

  return (
    <Pressable onPress={onPress?.bind(this, movie?.id as number)}>
      <Container
        style={{
          shadowColor: COLORS.secondary,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 10,
        }}
      >
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
