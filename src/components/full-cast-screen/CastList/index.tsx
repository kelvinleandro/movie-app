import { View, FlatList } from "react-native";
import React from "react";
import { CastMember } from "@/types/api";
import { Item, Separator } from "./styles";
import { getTmdbImage } from "@/utils";

const CastList = ({ data }: { data: CastMember[] | null }) => {
  const renderItem = ({ item }: { item: CastMember }) => {
    return (
      <Item.Container>
        <Item.Profile
          source={{ uri: getTmdbImage(item.profile_path, "w300") }}
          resizeMode="contain"
        />
        <Item.TextContainer>
          <Item.Name>{item.name}</Item.Name>
          <Item.Character>{item.character}</Item.Character>
        </Item.TextContainer>
      </Item.Container>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => `${item.id}`}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={Separator}
    />
  );
};

export default CastList;
