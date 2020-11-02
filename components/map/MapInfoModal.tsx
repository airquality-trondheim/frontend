import { Button, Grid, Row, Col } from 'native-base';
import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import { GRAY, WHITE, CLOSEBUTTON, STOPBUTTON } from '../../constants/Colors';
import { width, singleSideMargin, height } from '../../constants/Layout';
import CloseButton from '../CloseButton';
import { FontAwesome } from '@expo/vector-icons';

export default function MapInfoModal(props: {
  modalVisible: boolean;
  modalOnRequestClose: () => void;
  onCloseButtonPress: () => void;
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.modalOnRequestClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Grid>
            <Row size={1.25}>
              <Text style={styles.headerText}>Informasjon</Text>
            </Row>
            <Row size={1.75}>
              <Text style={{ ...styles.text }}>
                Frisk viser de ulike sonene for måling av luftkvalitet for å
                legge til rette for at du kan gå til jobben i frisk luft.
              </Text>
            </Row>

            <Row size={1.5}>
              <Col size={3}>
                <View style={styles.col}>
                  <Button style={styles.button} disabled={true}>
                    <Text style={styles.buttonText}>Start</Text>
                  </Button>
                </View>
              </Col>
              <Col size={8}>
                <View style={styles.col}>
                  <Text
                    style={[styles.text, styles.leftText, styles.smallText]}
                  >
                    Trykk for å aktivere sesjon som vil spore hvor du går og
                    registrere avstand og tid.
                  </Text>
                </View>
              </Col>
            </Row>

            <Row size={2.5}>
              <Col size={3}>
                <View style={styles.col}>
                  <Button
                    style={[styles.button, styles.stopButton]}
                    disabled={true}
                  >
                    <Text style={styles.buttonText}>Avslutt</Text>
                  </Button>
                </View>
              </Col>
              <Col size={8}>
                <View style={styles.col}>
                  <Text
                    style={[styles.text, styles.leftText, styles.smallText]}
                  >
                    Trykk for å avslutte sesjon som vil spore hvor du går og
                    registrere avstand og tid.
                  </Text>
                </View>
              </Col>
            </Row>

            <Row size={6}>
              <Col size={1}>
                <View style={[styles.rightBorder, styles.bottomBorder]}>
                  <View style={styles.centeredView}>
                    <FontAwesome name="map-marker" size={50} color="#3f9f41" />
                  </View>
                  <Text style={styles.textBelow}>
                    Luftforurensingen er lav. Liten eller ingen risiko for
                    helseeffekter.
                  </Text>
                </View>
                <View style={styles.rightBorder}>
                  <View style={styles.centeredView}>
                    <FontAwesome name="map-marker" size={50} color="#c13500" />
                  </View>
                  <Text style={styles.textBelow}>
                    Luftforurensingen er høy. Betydelig helserisiko.
                  </Text>
                </View>
              </Col>
              <Col size={1}>
                <View style={styles.bottomBorder}>
                  <View style={styles.centeredView}>
                    <FontAwesome name="map-marker" size={50} color="#ffcb00" />
                  </View>
                  <Text style={styles.textBelow}>
                    Luftforurensingen er moderat. Moderat helserisiko.
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={styles.centeredView}>
                    <FontAwesome name="map-marker" size={50} color="#4900ac" />
                  </View>
                  <Text style={styles.textBelow}>
                    Luftforurensingen er svært høy. Alvorlig helserisiko.
                  </Text>
                </View>
              </Col>
            </Row>

            <Row size={2}>
              <View style={styles.centeredView}>
                <CloseButton onPress={props.onCloseButtonPress} />
              </View>
            </Row>
          </Grid>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: width - singleSideMargin,
    height: height * 0.8,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 5,
  },
  headerText: {
    flex: 1,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  text: {
    fontSize: 17,
    textAlign: 'center',
  },
  textBelow: {
    fontSize: 13,
    textAlign: 'center',
  },
  col: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 10,
  },
  leftText: {
    textAlign: 'left',
  },
  smallText: {
    fontSize: 14,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: CLOSEBUTTON,
    borderRadius: 20,
    padding: 10,
    width: 65,
    elevation: 2,
    alignSelf: 'center',
  },
  stopButton: {
    backgroundColor: STOPBUTTON,
  },
  buttonText: {
    color: WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rightBorder: {
    flex: 1,
    borderRightWidth: 2,
    borderColor: GRAY,
  },
  bottomBorder: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: GRAY,
  },
});
