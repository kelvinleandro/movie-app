import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
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
  color: ${COLORS.text};
  font-weight: bold;
  font-size: 22px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const ListItem = ({
  item,
  itemClickHandler,
}: {
  item: Movie | CastMember;
  itemClickHandler?: (id: number) => void;
}) => {
  const uri = "poster_path" in item ? item.poster_path : item.profile_path;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={itemClickHandler?.bind(this, item.id)}>
      <Image
        resizeMode="contain"
        source={{
          uri: getTmdbImage(uri, "w500"),
        }}
        style={{
          width: Dimensions.get("window").width / 3,
          height: (Dimensions.get("window").width * 4) / 9,
          borderRadius: 14,
          marginHorizontal: 6,
        }}
      />
    </TouchableOpacity>
  );
};

const List = ({
  data,
  itemClickHandler,
}: {
  data: (Movie | CastMember)[] | null;
  itemClickHandler?: (id: number) => void;
}) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ListItem item={item} itemClickHandler={itemClickHandler} />}
      keyExtractor={(item) => `${item.id}`}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export const HorizontalList = {
  Container,
  Label,
  List,
};
