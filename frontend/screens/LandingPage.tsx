import { Body, Card, CardItem, Col, Container, Grid, Right, Row } from "native-base";
import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { DANGER1, DANGER2, DANGER3, DANGER4, DANGER5 } from "../constants/Colors";
import {width, height} from "../constants/Layout";
import InfoCard from "../components/InfoCard";

function LandingPage() {
    return (<ScrollView contentContainerStyle={styles.scrollView}>
        <InfoCard />
    </ScrollView>);
}

export default LandingPage;

const styles=StyleSheet.create({
    scrollView: {
        justifyContent: "center", 
        alignItems: "center", 
        minWidth: width, 
        minHeight:height,
        borderWidth: 2
    },
    shadowStyle: {
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27
    },
    containerStyle: {
        backgroundColor: "#e0ece4",
        width: 0.8 * width,
        height: 200,
        borderRadius: 20,
        overflow: "hidden"
    },
    bottomBorder: {
        borderBottomWidth: 2,
        flex: 1
    },
    rightBorder: {
        borderRightWidth: 2,
        flex: 1
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    headlineText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    leftCardText: {
        fontSize: 40
    },
    rightCardText: {
        fontSize: 20
    },
    sliderIndictor: {
        position: "absolute", 
        backgroundColor: "white", 
        marginTop: 0.5, 
        marginLeft: 100, //Will change depending on the air quality to move the indicator on the slider
        width: 20, 
        height:20, 
        borderRadius: 40,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27
    }
})