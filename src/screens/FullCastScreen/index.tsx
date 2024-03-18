import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import useApi from "@/hooks/useApi";
import { fetchMovieCast } from "@/api/helper";
import {
  ExploreStackParamList,
  HomeStackParamList,
  ProfileStackParamList,
} from "@/types/navigation";
import styled from "styled-components/native";
import { ScreenView } from "@/components/UI/StyledComponents";
import CastList from "@/components/full-cast-screen/CastList";
import COLORS from "@/constants/colors";

type Props = NativeStackScreenProps<
  ExploreStackParamList | HomeStackParamList | ProfileStackParamList,
  "FullCast"
>;

const FullCastScreen = ({ route }: Props) => {
  const id = route.params.id;
  const { data: cast } = useApi(fetchMovieCast, id);

  return (
    <ScreenView>
      <Title>Full Cast ({cast?.length}):</Title>
      <CastList data={cast} />
    </ScreenView>
  );
};

export default FullCastScreen;

const Title = styled.Text`
  color: ${COLORS.secondary};
  font-size: 32px;
  font-weight: bold;
`