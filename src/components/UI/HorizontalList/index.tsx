import { FlatList, Image, Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

import { Movie, CastMember } from "@/types/api";
import { getTmdbImage } from "@/utils";
import COLORS from "@/constants/colors";

const Container = styled.View`
  flex: 1;
  margin: 8px 0px;
`;

const Label = styled.Text`
  color: "rgb(255,255,255)";
  font-weight: bold;
  font-size: 22px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const ListItem = ({ item }: { item: Movie | CastMember }) => {
  const uri = "poster_path" in item ? item.poster_path : item.profile_path;
  return (
    <Image
      resizeMode="contain"
      source={{
        uri: getTmdbImage(uri, "w500"),
      }}
      style={{
        width: Dimensions.get("window").width / 3,
        borderRadius: 14,
        marginHorizontal: 6,
      }}
    />
  );
};

const List = ({ data }: { data: (Movie | CastMember)[] | null }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ListItem item={item} />
      )}
      keyExtractor={(item) => `${item.id}`}
      horizontal={true}
    />
  );
};

export const HorizontalList = {
  Container,
  Label,
  List,
};
