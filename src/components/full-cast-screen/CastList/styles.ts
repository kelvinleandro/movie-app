import styled from "styled-components/native";
import COLORS from "@/constants/colors";
import { Dimensions } from "react-native";

const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

const ItemProfile = styled.Image`
  width: ${Dimensions.get("window").width * 0.3}px;
  height: ${Dimensions.get("window").width * 0.4}px;
  margin-right: 24px;
`;

const ItemTextContainer = styled.View`
  flex: 1;
  justify-content: center;
`

const ItemName = styled.Text`
  color: ${COLORS.secondary};
  font-weight: 600;
  font-size: 18px;
`;

const ItemCharacter = styled.Text`
  color: ${COLORS.text};
  font-weight: 500;
  font-size: 16px;
`;

const Item = {
  Container: ItemContainer,
  TextContainer: ItemTextContainer,
  Profile: ItemProfile,
  Name: ItemName,
  Character: ItemCharacter,
};

const Separator = styled.View`
  height: 2px;
  background-color: ${COLORS.secondary};
`

export { Item, Separator };
