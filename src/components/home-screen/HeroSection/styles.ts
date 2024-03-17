import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "@/constants/colors";

const Container = styled.View`
  width: ${Dimensions.get("window").width * 0.8}px;
  height: ${(Dimensions.get("window").width * 0.8 * 3) / 2}px;
  margin: 16px 0px;
  border-radius: ${Dimensions.get("window").width * 0.04}px;
  border: 4px solid ${COLORS.secondary};
  overflow: hidden;
`;

const Background = styled.ImageBackground`
  flex: 1;
  width: "100%";
  height: "100%";
`;

const GradientOverlay = styled(LinearGradient)`
  flex: 1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: flex-end;
  align-items: center;
  padding: 18px 12px;
`;

const ContentContainer = styled.View`
  align-self: stretch;
  align-items: center;
  gap: 10px;
`;

const Title = styled.Text`
  color: ${COLORS.text};
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
`;

export { Container, Background, GradientOverlay, ContentContainer, Title };
