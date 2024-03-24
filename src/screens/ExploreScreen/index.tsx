import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { Button } from "react-native-paper";

import COLORS from "@/constants/colors";
import useApi from "@/hooks/useApi";
import { Genre } from "@/types/api";
import CategoryModal from "@/components/explore-screen/CategoryModal";

const ExploreScreen = () => {
  const [category, setCategory] = useState({ id: 0, name: "" });
  const { data: genres } = useApi("fetchCategories");
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);

  useEffect(() => {
    if (genres && genres.length > 0) setCategory(genres[0]);
  }, [genres]);

  const categoryItemPressHandler = (item: Genre) => {
    setCategory(item);
    setCategoryModalVisible(false);
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginBottom: 8,
        padding: 12,
      }}
    >
      <View style={{ flexDirection: "row", padding: 6 }}>
        <Text
          style={{
            flex: 1,
            color: COLORS.text,
            fontSize: 28,
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          Category
        </Text>
        <Button
          mode="outlined"
          textColor={COLORS.secondary}
          onPress={() => setCategoryModalVisible(true)}
          accessibilityLabel="Change category"
          style={{
            flex: 1,
            paddingVertical: 2,
            borderColor: COLORS.secondary,
          }}
          labelStyle={{ fontSize: 16, fontWeight: "600" }}
        >
          {category.name}
        </Button>
      </View>

      <CategoryModal
        visible={categoryModalVisible}
        onDismiss={() => setCategoryModalVisible(false)}
        onItemPress={categoryItemPressHandler}
      />
    </View>
  );
};

export default ExploreScreen;
