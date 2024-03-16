import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import useApi from "@/hooks/useApi";
import { fetchMovie } from "@/api/helper";
import {
  ExploreStackParamList,
  HomeStackParamList,
  ProfileStackParamList,
} from "@/types/navigation";

type Props = NativeStackScreenProps<
  ExploreStackParamList | HomeStackParamList | ProfileStackParamList,
  "MovieDetail"
>;

const MovieDetailScreen = ({ route }: Props) => {
  const id: number = route.params.id;
  const { data: movie } = useApi(fetchMovie, id);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#fff" }}>{movie?.title}</Text>
    </View>
  );
};

export default MovieDetailScreen;
