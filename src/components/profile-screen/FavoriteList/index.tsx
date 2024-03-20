import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import { FavoriteMoviesContext } from "@/context/FavoriteMoviesContext";
import COLORS from "@/constants/colors";

const FavoriteList = () => {
  const favoriteContext = useContext(FavoriteMoviesContext);

  return (
    <View>
      <FlatList
        data={favoriteContext?.favoriteMovies}
        renderItem={({ item }) => <Text style={{color: COLORS.text}} >{item}</Text>}
        keyExtractor={(item) => item.toString()}
        numColumns={3}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
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