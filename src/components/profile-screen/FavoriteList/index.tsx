import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import { FavoriteMoviesContext } from "@/context/FavoriteMoviesContext";
import COLORS from "@/constants/colors";
import { Separator } from "@/components/full-cast-screen/CastList/styles";

const FavoriteList = () => {
  const favoriteContext = useContext(FavoriteMoviesContext);

  return (
    <View>
      <FlatList
        data={favoriteContext?.favoriteMovies}
        renderItem={({ item }) => <Text style={{color: COLORS.text}} >{item}</Text>}
        keyExtractor={(item) => item.toString()}
        numColumns={3}
        ItemSeparatorComponent={Separator}
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