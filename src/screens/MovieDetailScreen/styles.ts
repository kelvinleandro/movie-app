import { Dimensions } from "react-native";
import Constants from "expo-constants";
import styled from "styled-components/native";
import COLORS from "@/constants/colors";

const Container = styled.ScrollView.attrs(() => ({
  alwaysBounceVertical: false,
  bounces: false,
  overScrollMode: "never",
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  margin-top: ${Constants.statusBarHeight * 1.75}px;
  margin-bottom: 8px;
`;

const PosterWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: ${(Dimensions.get("window").width * 4) / 3}px;
`;

const Poster = styled.Image`
  width: 100%;
  height: 100%;
`;

const DetailSection = styled.View`
  margin-top: 10px;
  padding: 0px 10px 10px;
  align-self: stretch;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: ${COLORS.secondary};
  font-weight: bold;
  font-size: 28px;
  text-align: left;
`;

const Synopsis = styled.Text`
  color: ${COLORS.text};
  font-weight: 500;
  font-size: 16px;
  text-align: justify;
  line-height: 20px;
`;

const InfoWrapper = styled.View`
  flex-direction: row;
  gap: 12px;
  margin: 6px 0px;
`;

const InfoText = styled.Text`
  color: ${COLORS.text};
  font-weight: 500;
  font-size: 20px;
`;

const VoteWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const VoteText = styled.Text`
  color: ${COLORS.text};
  font-weight: 600;
  font-size: 20px;
`;

export {
  Container,
  PosterWrapper,
  Poster,
  DetailSection,
  Title,
  Synopsis,
  InfoWrapper,
  InfoText,
  VoteWrapper,
  VoteText,
};
