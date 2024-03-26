import { View } from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
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
        marginTop: Constants.statusBarHeight,
        marginBottom: 8,
        paddingHorizontal: 12,
        gap: 12
      }}
    >
      <Searchbar
        placeholder="Search movie"
        onChangeText={changeQueryHandler}
        onClearIconPress={clearInputHandler}
        value={query}
        searchAccessibilityLabel="Search for movie"
        inputStyle={{ color: COLORS.primary }}
        iconColor={COLORS.primary}
      />
      <QueryList query={query} />
    </View>
  );
};

export default SearchScreen;
