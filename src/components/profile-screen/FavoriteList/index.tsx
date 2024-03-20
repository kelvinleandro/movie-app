import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import { FavoriteMoviesContext } from "@/context/FavoriteMoviesContext";
import COLORS from "@/constants/colors";
import { ListItem } from "@/components/UI/HorizontalList";

const FavoriteList = ({onItemPress}: {
  onItemPress: (id: number) => void;
}) => {
  const favoriteContext = useContext(FavoriteMoviesContext);

  return (
    <View>
      <FlatList
        data={favoriteContext?.favoriteMovies}
        renderItem={({ item }) => (
          <ListItem item={item} itemClickHandler={onItemPress} />
        )}
        keyExtractor={(item) => item.toString()}
        numColumns={3}
        ItemSeparatorComponent={() => (
          <View style={{ width: 16, height: 16 }} />
        )}
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
    </View>
  );
};

export default FavoriteList;
