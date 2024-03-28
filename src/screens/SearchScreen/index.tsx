import { View } from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

import QueryList from "@/components/search-screen/QueryList";
import COLORS from "@/constants/colors";

const SearchScreen = () => {
  const [query, setQuery] = useState("");

  const changeQueryHandler = (value: string) => setQuery(value);
  const clearInputHandler = () => setQuery("");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        marginBottom: 8,
        gap: 12,
      }}
    >
      <Searchbar
        mode="view"
        placeholder="Search movie"
        onChangeText={changeQueryHandler}
        onClearIconPress={clearInputHandler}
        value={query}
        searchAccessibilityLabel="Search for movie"
        inputStyle={{ color: COLORS.primary }}
        iconColor={COLORS.primary}
        style={{
          borderBottomWidth: 2,
          borderBottomColor: COLORS.secondary,
        }}
      />
      <View style={{ paddingHorizontal: 12 }}>
        <QueryList query={query} />
      </View>
    </View>
  );
};

export default SearchScreen;
