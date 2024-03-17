import { Button, FlatList, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";

import { Movie, CastMember } from "@/types/api";
import { getTmdbImage } from "@/utils";

import { Character, Container, Label, Name } from "./styles";

interface HorizontalListProps {
  data: (Movie | CastMember)[] | null;
  label: string;
  action?: {
    text: string;
    handler: () => void;
  };
  itemClickHandler?: (id: number) => void;
}

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
            overflow: "hidden",
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

const HorizontalList = ({
  data,
  label,
  action,
  itemClickHandler,
}: HorizontalListProps) => {
  return (
    <Container>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Label>{label}</Label>
        {action && <Button onPress={action.handler} title={action.text} />}
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem item={item} itemClickHandler={itemClickHandler} />
        )}
        keyExtractor={(item) => `${item.id}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default HorizontalList;
