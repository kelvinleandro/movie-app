import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styled from "styled-components/native";

import useApi from "@/hooks/useApi";
import {
  ExploreStackParamList,
  HomeStackParamList,
  ProfileStackParamList,
} from "@/types/navigation";
import CastList from "@/components/full-cast-screen/CastList";
import COLORS from "@/constants/colors";
import SkeletonFullCast from "@/components/UI/Skeleton/SkeletonFullCast";
import FetchingError from "@/components/UI/FetchingError";

type Props = NativeStackScreenProps<
  ExploreStackParamList | HomeStackParamList | ProfileStackParamList,
  "FullCast"
>;

const FullCastScreen = ({ route }: Props) => {
  const id = route.params.id;
  const { data: cast, isLoading, error } = useApi("fetchMovieCast", id);

  if (isLoading) {
    return <SkeletonFullCast />
  }

  if (error) {
    return <FetchingError />
  }

  return (
    <Container>
      <Title>Full Cast ({cast?.length}):</Title>
      <CastList data={cast} />
    </Container>
  );
};

export default FullCastScreen;

const Container = styled.View`
  flex: 1;
  padding: 0 12px;
  margin-bottom: 8px;
`

const Title = styled.Text`
  color: ${COLORS.secondary};
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 12px;
`