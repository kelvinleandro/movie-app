import COLORS from "@/constants/colors";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const Container = styled.View`
  flex: 1;
  margin: 8px 0px;
`;

const Label = styled.Text`
  color: ${COLORS.text};
  font-weight: bold;
  font-size: 22px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const Name = styled.Text`
  color: ${COLORS.text};
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
`;

const Character = styled.Text`
  color: ${COLORS.text};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

const PosterContainer = styled.View`
  width: ${Dimensions.get("window").width / 3}px;
  height: ${(Dimensions.get("window").width * 4) / 9}px;
  border-radius: ${Dimensions.get("window").width * 0.03}px;
  overflow: hidden;
`

const Poster = styled.Image`
  width: 100%;
  height: 100%;
`

const ItemContainer = styled.View`
  overflow: hidden;
  width: ${Dimensions.get("window").width / 3}px;
`

const Item = {
  Container: ItemContainer,
  PosterContainer,
  Poster,
  Name,
  Character,
}

export { Container, Label, Item };
