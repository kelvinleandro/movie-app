import { View, Text, FlatList } from "react-native";
import React from "react";

import COLORS from "@/constants/colors";
import useApi from "@/hooks/useApi";
import { Genre } from "@/types/api";

const GenreList = ({ list }: { list: number[] }) => {
  const { data: genreList } = useApi("fetchCategories");

  const filteredAndLimitedGenres = genreList
    ?.filter((genre) => list.includes(genre.id))
    .slice(0, 2);

  const renderItem = ({ item }: { item: Genre }) => (
    <View
      style={{
        backgroundColor: COLORS.primary,
        paddingVertical: 6,
        paddingHorizontal: 10,
        marginHorizontal: 6,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
      }}
    >
      <Text
        style={{ color: COLORS.secondary, fontSize: 16, fontWeight: "600" }}
      >
        {item.name}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={filteredAndLimitedGenres}
      renderItem={renderItem}
      keyExtractor={(item) => `${item.id}`}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      alwaysBounceHorizontal={false}
    />
  );
};

export default GenreList;
