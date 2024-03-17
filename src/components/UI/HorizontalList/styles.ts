import COLORS from "@/constants/colors";
import styled from "styled-components/native";

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

export { Container, Label, Name, Character };
