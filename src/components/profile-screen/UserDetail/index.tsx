import React from "react";
import styled from "styled-components/native";
import { Avatar } from "react-native-paper";

import COLORS from "@/constants/colors";

const UserDetail = ({firstName, lastName}: {firstName: string, lastName: string}) => {
  return (
    <Container>
      <Avatar.Text size={72} label={firstName[0] + lastName[0]} />
      <UserName>{`${firstName} ${lastName}`}</UserName>
    </Container>
  );
};

export default UserDetail;

const Container = styled.View`
  background-color: ${COLORS.secondary};
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 18px 0;
`;

const UserName = styled.Text`
  color: ${COLORS.text};
  font-weight: bold;
  font-size: 28px;
`;
