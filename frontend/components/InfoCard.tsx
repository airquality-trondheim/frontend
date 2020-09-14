import { Text, View, StyleSheet } from "react-native";
import { Grid, Row, Col, Container } from "native-base";
import React from "react";
import { DANGER5, DANGER4, DANGER3, DANGER2, DANGER1 } from "../constants/Colors";
import { width, height } from "../constants/Layout";

function InfoCard(){
    return (<View style={styles.shadowStyle}>
        <View style={styles.containerStyle}>
            <Grid>
                <Row size={2}>
                    <View style={[styles.bottomBorder, styles.centerContent]}>
                        <Text style={styles.headlineText}>Tiller, Trondheim</Text>
                    </View>  
                </Row>
                <Row size={6}>
                    <View style={styles.bottomBorder}>
                        <Grid>
                            <Col size={3}><View style={[styles.rightBorder, styles.centerContent]}><Text style={styles.leftCardText}>Utmerket</Text></View></Col>
                            <Col size={1}><View style={styles.centerContent}><Text style={styles.rightCardText}>86</Text></View></Col>
                        </Grid>
                    </View>
                </Row>
                <Row size={1}>
                    <Container style={{position: "relative"}}>
                        <Grid>
                            <Col size={1} style={{backgroundColor: DANGER5}}></Col>
                            <Col size={1} style={{backgroundColor: DANGER4}}></Col>
                            <Col size={1} style={{backgroundColor: DANGER3}}></Col>
                            <Col size={1} style={{backgroundColor: DANGER2}}></Col>
                            <Col size={1} style={{backgroundColor: DANGER1}}></Col>
                        </Grid>
                        <View style={styles.sliderIndictor}>
                        </View>
                    </Container>
                </Row>
            </Grid>
        </View>
    </View>)
}

export default InfoCard;


const styles=StyleSheet.create({
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
        overflow: "hidden",
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