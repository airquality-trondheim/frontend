import React from "react";
import {
  Body,
  Card,
  CardItem,
  Col,
  Container,
  Grid,
  Right,
  Row,
  Header,
  Left,
  Button,
  Icon,
  Title,
} from "native-base";
import { Image } from "react-native";
import { wind, snake } from "../assets/images";
import { width } from "../constants/Layout";

function HeaderBar() {
  return (
    <Header style={{ width: width, backgroundColor: "red" }}>
      <Left>
        <Button transparent>
          <Image source={wind} style={{ width: 60, height: 60 }} />
        </Button>
      </Left>
      <Body>
        <Title>Header</Title>
      </Body>
      <Right>
        <Button transparent>
          <Image source={snake} style={{ width: 60, height: 60 }} />
        </Button>
      </Right>
    </Header>
  );
}

export default Header;
