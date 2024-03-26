import { FlatList } from "react-native";
import React, { useState } from "react";
import { CastMember } from "@/types/api";
import { Item, Separator, PlaceHolder, PlaceHolderText } from "./styles";
import { getTmdbImage } from "@/utils";

const CastItem = ({ item }: { item: CastMember }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <Item.Container>
      <Item.ImageContainer>
        {imageLoaded ? (
          <Item.Image
            source={{ uri: getTmdbImage(item.profile_path, "w300") }}
            resizeMode="cover"
            onError={() => setImageLoaded(false)}
          />
        ) : (
          <PlaceHolder><PlaceHolderText>Image Unavailable</PlaceHolderText></PlaceHolder>
        )}
      </Item.ImageContainer>
      <Item.TextContainer>
        <Item.Name>{item.name}</Item.Name>
        <Item.Character>{item.character}</Item.Character>
      </Item.TextContainer>
    </Item.Container>
  );
};

const CastList = ({ data }: { data: CastMember[] | null }) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <CastItem item={item} />}
      keyExtractor={(item) => `${item.id}`}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={Separator}
    />
  );
};

export default CastList;
