import { Grid, Row, Col } from 'native-base';
import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import { GRAY, WHITE } from '../../constants/Colors';
import { width, singleSideMargin, height } from '../../constants/Layout';
import AQHalfCircle from './AQHalfCircle';
import CloseButton from '../CloseButton';

const createAQComponentInfo = (
  componentNameLetters: string,
  componentDescription: string,
  componentNameNumbers?: string,
) => {
  return (
    <Row size={1.5}>
      <Col size={2}>
        <View style={styles.row}>
          <Text style={styles.text}>{componentNameLetters}</Text>
          <Text style={{ fontSize: 10 }}>{componentNameNumbers}</Text>
        </View>
      </Col>
      <Col size={1}>
        <Text style={styles.text}>-</Text>
      </Col>
      <Col size={9}>
        <Text style={[styles.text, styles.leftText, styles.smallText]}>
          {componentDescription}
        </Text>
      </Col>
    </Row>
  );
};

function AQInfoModal(props: {
  modalVisible: boolean;
  modalOnRequestClose: () => void;
  onCloseButtonPress: () => void;
}) {
  const modalWidth = width - 2 * singleSideMargin;
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
            <Row size={2}>
              <Text style={styles.headerText}>Informasjon</Text>
            </Row>
            <Row size={2.25}>
              <Text style={{ ...styles.text }}>
                Frisk viser målingen av luftkvaliteten gjort av sensorer som er
                plassert rundt om i byen. Disse sensorene måler:
              </Text>
            </Row>

            {createAQComponentInfo(
              'AQI',
              'indeks som viser luftkvalitet. AQI går fra 1 til 4 og høyere AQI viser dårligere luftkvalitet',
            )}
            {createAQComponentInfo(
              'PM',
              'viser finfraksjon av svevestøv i målenehet mikrogram per kvadratmeter',
              '2.5',
            )}
            {createAQComponentInfo(
              'PM',
              'viser grovfraksjon av svevestøv i målenehet mikrogram per kvadratmeter',
              '10',
            )}
            {createAQComponentInfo(
              'NO',
              'viser nitrogendioksid i målenehet mikrogram per kvadratmeter',
              '2',
            )}
            <Row size={8}>
              <Col size={1}>
                <View style={[styles.rightBorder, styles.bottomBorder]}>
                  <AQHalfCircle
                    fill={12.5}
                    size={modalWidth / 2.5}
                    insideText={'Utmerket'}
                    belowText={
                      'AQI er 0-1 noe som tilsvarer lave forekomster av luftforurensning.'
                    }
                  />
                </View>
                <View style={styles.rightBorder}>
                  <AQHalfCircle
                    fill={62.5}
                    size={modalWidth / 2.5}
                    insideText={'Dårlig'}
                    belowText={
                      'AQI er 2-3 noe som tilsvarer høy forekomst av luftforurensing.'
                    }
                  />
                </View>
              </Col>
              <Col size={1}>
                <View style={styles.bottomBorder}>
                  <AQHalfCircle
                    fill={37.5}
                    size={modalWidth / 2.5}
                    insideText={'Middels'}
                    belowText={
                      'AQI er 1-2 noe som tilsvarer middels forekomst av luftforurensing.'
                    }
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <AQHalfCircle
                    fill={87.5}
                    size={modalWidth / 2.5}
                    insideText={'Svært dårlig'}
                    belowText={
                      'AQI er større enn 3 noe som tilsvarer svært høy forekomst av luftforurensing.'
                    }
                  />
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

export default AQInfoModal;

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
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  leftText: {
    textAlign: 'left',
  },
  smallText: {
    fontSize: 14,
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
