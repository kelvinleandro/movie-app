import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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

const Name = styled.Text`
  color: ${COLORS.text};
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`;

const Character = styled.Text`
  color: ${COLORS.text};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
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
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={itemClickHandler?.bind(this, item.id)}
    >
      <View
        style={{
          overflow: "hidden",
          width: Dimensions.get("window").width / 3,
        }}
      >
        <View
          style={{
            width: Dimensions.get("window").width / 3,
            height: (Dimensions.get("window").width * 4) / 9,
            borderRadius: Dimensions.get("window").width * 0.05,
            marginHorizontal: 6,
            overflow: "hidden"
          }}
        >
          <Image
            resizeMode="contain"
            source={{
              uri: getTmdbImage(uri, "w500"),
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>
        {"cast_id" in item && (
          <>
            <Name>{item.name}</Name>
            <Character>{item.character}</Character>
          </>
        )}
      </View>
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
      renderItem={({ item }) => (
        <ListItem item={item} itemClickHandler={itemClickHandler} />
      )}
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
