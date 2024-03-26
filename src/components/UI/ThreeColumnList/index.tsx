import { Text, FlatList, TouchableOpacity, View } from "react-native";
import React from "react";
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

const ThreeColumnList = ({
  data,
  onItemPress,
}: {
  data: Movie[] | null;
  onItemPress: (id: number) => void;
}) => {

  return (
    <View style={{width: "100%"}}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem item={item} onPress={onItemPress} />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
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
      
    </View>
  );
};

export default ThreeColumnList;
