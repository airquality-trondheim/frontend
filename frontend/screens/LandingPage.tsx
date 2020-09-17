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
import React from "react";
import { Image, View, ScrollView, Text, StyleSheet } from "react-native";
import {
  DANGER1,
  DANGER2,
  DANGER3,
  DANGER4,
  DANGER5,
} from "../constants/Colors";
import { width, height } from "../constants/Layout";
import InfoCard from "../components/InfoCard";
import { CarouselItem } from "../components/CarouselItem";
import LandingPageCarousel from "../components/LandingPageCarousel";
import { snake, wind } from "../assets/images";

function LandingPage() {
  return (
    <Container style={styles.scrollView}>
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
      <InfoCard />
      <LandingPageCarousel />
    </Container>
  );
}

export default LandingPage;

const styles = StyleSheet.create({
  scrollView: {
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: width,
    minHeight: height,
  },
  shadowStyle: {
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  containerStyle: {
    backgroundColor: "#e0ece4",
    width: 0.5 * width,
    height: 200,
    borderRadius: 20,
    overflow: "hidden",
    marginLeft: 10,
  },
  carouselContainerStyle: {
    height: 205,
    width: width,
  },
  bottomBorder: {
    borderBottomWidth: 2,
    flex: 1,
  },
  rightBorder: {
    borderRightWidth: 2,
    flex: 1,
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  headlineText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  leftCardText: {
    fontSize: 40,
  },
  rightCardText: {
    fontSize: 20,
  },
  sliderIndictor: {
    position: "absolute",
    backgroundColor: "white",
    marginTop: 0.5,
    marginLeft: 100, //Will change depending on the air quality to move the indicator on the slider
    width: 20,
    height: 20,
    borderRadius: 40,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
});
