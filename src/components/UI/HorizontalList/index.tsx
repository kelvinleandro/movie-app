import { FlatList, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

import { Movie, CastMember } from "@/types/api";
import { getTmdbImage } from "@/utils";

import { Container, Label, Item } from "./styles";
import COLORS from "@/constants/colors";

interface ListItemProps {
  item: Movie | CastMember;
  itemClickHandler?: (id: number) => void;
}

interface HorizontalListProps {
  data: (Movie | CastMember)[] | null;
  label: string;
  action?: {
    text: string;
    handler: () => void;
  };
  itemClickHandler?: (id: number) => void;
}

const ListItem = ({ item, itemClickHandler}: ListItemProps) => {
  const uri = "poster_path" in item ? item.poster_path : item.profile_path;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={itemClickHandler?.bind(this, item.id)}
    >
      <Item.Container>
        <Item.PosterContainer>
          <Item.Poster
            resizeMode="cover"
            source={{
              uri: getTmdbImage(uri, "w500"),
            }}
          />
        </Item.PosterContainer>
        {"cast_id" in item && (
          <>
            <Item.Name>{item.name}</Item.Name>
            <Item.Character>{item.character}</Item.Character>
          </>
        )}
      </Item.Container>
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
        {action && (
          <Button
            onPress={action.handler}
            mode="text"
            textColor={COLORS.secondary}
            theme={{
              colors: { primary: "transparent", onSurface: "transparent" },
            }}
            labelStyle={{ fontWeight: "600", fontSize: 18 }}
            accessibilityLabel={action.text}
          >
            {action.text}
          </Button>
        )}
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem item={item} itemClickHandler={itemClickHandler} />
        )}
        keyExtractor={(item) => `${item.id}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      />
    </Container>
  );
};

export default HorizontalList;
