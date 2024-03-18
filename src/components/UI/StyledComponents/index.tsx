import styled from "styled-components/native";

const ScreenView = styled.ScrollView.attrs(() => ({
  alwaysBounceVertical: false,
  bounces: false,
  overScrollMode: "never",
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  margin-bottom: 8px;
`;

export { ScreenView };
