import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { FavoriteMoviesContext } from "@/context/FavoriteMoviesContext";
import COLORS from "@/constants/colors";
import { Item } from "./styles";
import { Movie } from "@/types/api";
import { getTmdbImage } from "@/utils";

interface ListItemProps {
  item: Movie;
  onPress?: (id: number) => void;
}

export const ListItem = ({ item, onPress }: ListItemProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress?.bind(this, item.id)}
    >
        <Item.PosterContainer>
          <Item.Poster
            resizeMode="cover"
            source={{
              uri: getTmdbImage(item.poster_path, "w500"),
            }}
          />
        </Item.PosterContainer>
    </TouchableOpacity>
  );
};

const FavoriteList = ({
  onItemPress,
}: {
  onItemPress: (id: number) => void;
}) => {
  const favoriteContext = useContext(FavoriteMoviesContext);

  return (
    <FlatList
      data={favoriteContext?.favoriteMovies}
      renderItem={({ item }) => (
        <ListItem item={item} onPress={onItemPress} />
      )}
      keyExtractor={(item) => item.toString()}
      numColumns={3}
      ListEmptyComponent={() => (
        <Text
          style={{
            color: COLORS.secondary,
            textAlign: "center",
            fontWeight: "600",
            fontSize: 18,
          }}
        >
          Your list is empty.
        </Text>
      )}
    />
  );
};

export default FavoriteList;
