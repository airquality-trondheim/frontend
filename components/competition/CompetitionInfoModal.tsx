import { Grid, Row, Col } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Modal, View, Text, StyleSheet, Image } from 'react-native';
import { WHITE, BLACK } from '../../constants/Colors';
import { width, singleSideMargin, height } from '../../constants/Layout';
import CloseButton from '../CloseButton';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { fetchUserProfile } from '../../queries/profile';
import { Auth } from 'aws-amplify';

export default function CompetitionInfoModal(props: {
  modalVisible: boolean;
  modalOnRequestClose: () => void;
  onCloseButtonPress: () => void;
}) {
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    const getAvatar = async () => {
      const profileData = await fetchUserProfile(
        Auth.Credentials.Auth.user.signInUserSession.accessToken.payload.sub,
      );
      setAvatar(profileData.avatar);
    };
    getAvatar();
  }, []);

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
            <Row size={1}>
              <Text style={styles.headerText}>Informasjon</Text>
            </Row>
            <Row size={1}>
              <Text style={{ ...styles.text }}>
                Frisk lar deg konkurrere mot andre i å nå det høyeste nivået.
                For å gå opp i nivå må du tjene poeng noe du kan oppnå ved å:
              </Text>
            </Row>

            <Row size={1}>
              <Col size={3}>
                <View style={styles.row}>
                  <View style={styles.centeredView}>
                    <FontAwesome5 name="walking" size={40} color="black" />
                  </View>
                </View>
              </Col>
              <Col size={8}>
                <Text style={[styles.text, styles.leftText]}>Gå til jobb</Text>
                <Text style={[styles.text, styles.leftText, styles.smallText]}>
                  Ved å gå til jobb kan du tjene 50 poeng de første 500m,
                  deretter 10 poeng for hver 250m ekstra.
                </Text>
              </Col>
            </Row>

            <Row size={1}>
              <Col size={3}>
                <View style={styles.row}>
                  <View style={styles.centeredView}>
                    <FontAwesome name="map-marker" size={48} color="green" />
                  </View>
                </View>
              </Col>
              <Col size={8}>
                <Text style={[styles.text, styles.leftText]}>Trygg sone</Text>
                <Text style={[styles.text, styles.leftText, styles.smallText]}>
                  Ved å gå innom soner med god luftkvalitet vil du få 25 poeng
                  de første 500m, deretter 5 poeng for hver 250m ekstra.
                </Text>
              </Col>
            </Row>

            <Row size={1}>
              <Col size={3}>
                <View style={styles.row}>
                  <View style={styles.centeredView}>
                    <FontAwesome5 name="trophy" size={30} color="black" />
                  </View>
                </View>
              </Col>
              <Col size={8}>
                <Text style={[styles.text, styles.leftText]}>Bragder</Text>
                <Text style={[styles.text, styles.leftText, styles.smallText]}>
                  Sikre deg ekstra bonuspoeng ved å fullføre bragder med ulike
                  utfordringer.
                </Text>
              </Col>
            </Row>

            <Row size={1.5}>
              <Col size={8}>
                <View style={styles.col}>
                  <Text style={[styles.text, styles.leftText]}>Avatarer</Text>
                  <Text
                    style={[styles.text, styles.leftText, styles.smallText]}
                  >
                    Du vil få en avatar som reflekterer hvilket nivå du befinner
                    deg ved. Trykk på avataren på spillsiden for å se de ulike
                    typene du kan oppnå!
                  </Text>
                </View>
              </Col>
              <Col size={3}>
                <View style={styles.row}>
                  <View style={styles.centeredView}>
                    <Image source={{ uri: avatar }} style={styles.avatarIcon} />
                  </View>
                </View>
              </Col>
            </Row>

            <Row size={1}>
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
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    flex: 1,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  col: {
    marginLeft: 20,
  },
  leftText: {
    textAlign: 'left',
  },
  smallText: {
    fontSize: 12,
  },
  avatarIcon: {
    width: width * 0.2,
    height: width * 0.2,
  },
});
