import { useNavigation } from '@react-navigation/native';
import { Button, Grid, Row } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { getProfileData } from '../actions/profileActions';
import { RootState } from '../reducers';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';
import {
  LIGHTBLUE,
  WHITE,
  DARKRED,
  BACKGROUNDCOLOR4,
  BACKGROUNDCOLOR2,
} from '../constants/Colors';
import { height, width } from '../constants/Layout';
import Pearl from '../assets/images/svgComponent/pearl';
import Mail from '../assets/images/svgComponent/mail';
import Telefone from '../assets/images/svgComponent/telefone';
import Birthdaycake from '../assets/images/svgComponent/birthdaycake';
import LocationMap from '../assets/images/svgComponent/locationMap';
import LocationPin from '../assets/images/svgComponent/locationPin';
import StreetSign from '../assets/images/svgComponent/streetSign';
import { ProfileTextContainer } from '../components/ProfileTextContainer';

type UserProfileProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function ProfilePage(props: UserProfileProps) {
  const navigation = useNavigation();
  const { userProfile, fetchUserProfile } = props;

  useEffect(() => {
    //No idea how IDs are used, this one was copied from LeaderBoardCardWithModal.tsx
    fetchUserProfile('5f6dde0d71a2bf3507462942');
  }, [fetchUserProfile]);

  const formatProfileLevelText =
    userProfile.level == 0
      ? 'Nivå 2 - 304 poeng'
      : 'Nivå ' + userProfile.level + ' - ' + userProfile.points + ' poeng';

  const formatProfileNameText =
    userProfile.username == '0' ? 'Blekk Blekksprut' : userProfile.username;

  const formatMail =
    userProfile.mail === '0' ? 'fill in mail' : userProfile.mail;
  const formatTelefon =
    userProfile.telefon === '0' ? 'fill in mail' : userProfile.telefon;
  const formatLocation =
    userProfile.location === '0' ? 'fill in mail' : userProfile.location;
  const formatBirthdate =
    userProfile.birthdate === '0' ? 'fill in mail' : userProfile.birthdate;
  const formatStreet =
    userProfile.street === '0' ? 'fill in mail' : userProfile.street;
  const formatPostalCode =
    userProfile.postalcode === '0' ? 'fill in mail' : userProfile.postalcode;

  return (
    <Grid>
      <Row size={4}>
        <View>
          <View style={styles.profileView}>
            <View style={styles.upperLeftContainer}>
              <View style={styles.avatarContainer}>
                <View style={{ width: width * 0.2 }}>
                  <Pearl/>
                </View>
              </View>
            </View>
            <View style={styles.upperRightContainer}>
              <View style={styles.upperTextContainer}>
                <Text style={styles.upperTextFormat}>
                  {formatProfileLevelText}
                </Text>
              </View>
              <View style={styles.upperTextContainer}>
                <Text style={styles.upperTextFormat}>
                  {formatProfileNameText}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.centeredView,
              { width: width, height: height * 0.4 },
            ]}
          >
            <ProfileTextContainer text={formatMail} children={<Mail/>} />
            <ProfileTextContainer text={formatTelefon} children={<Telefone/>}/>
            <ProfileTextContainer text={formatBirthdate} children={<Birthdaycake/>}/>
            <View style={{ flexDirection: 'row' }}>
              <ProfileTextContainer
                text={formatLocation}
                outerWidth={width * 0.47}
                children={<LocationMap/>}
              />
              <View style={styles.minorSpace} />
              <ProfileTextContainer
                text={formatPostalCode}
                outerWidth={width * 0.3}
                children={<LocationPin/>}
              />
            </View>
            <ProfileTextContainer text={formatStreet} children={<StreetSign/>}/>
          </View>
        </View>
      </Row>
      <Row size={1}>
        <View style={styles.centeredView}>
          <Button
            style={[styles.button, styles.settingsButton]}
            onPress={() => navigation.navigate('SettingPage')}
          >
            <Text style={styles.buttonText}>Innstillinger</Text>
          </Button>
          <Button
            style={[styles.button, styles.logOutButton]}
            onPress={() => navigation.navigate('')}
          >
            <Text style={styles.buttonText}>Logg ut</Text>
          </Button>
        </View>
      </Row>
    </Grid>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    userProfile: state.userprofile,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
  return {
    fetchUserProfile: (userID: string) => {
      getProfileData(userID, dispatch);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderRadius: 20,
    padding: 10,
    margin: 3,
    width: 120,
    elevation: 2,
    alignSelf: 'center',
  },

  settingsButton: {
    backgroundColor: LIGHTBLUE,
  },

  logOutButton: {
    backgroundColor: DARKRED,
  },

  buttonText: {
    color: WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileView: {
    width: width,
    height: 0.25 * height,
    backgroundColor: LIGHTBLUE,
    flexDirection: 'row',
  },

  upperTextContainer: {
    width: width * 0.55,
    height: height * 0.04,
    backgroundColor: WHITE,
    borderRadius: height * 0.02,
    margin: height * 0.015,
    justifyContent: 'center',
  },

  upperTextFormat: {
    marginLeft: width * 0.04,
    fontSize: 18,
    fontWeight: 'bold',
  },

  marginLeftFour: {
    marginLeft: width * 0.04,
  },

  upperRightContainer: {
    width: width * 0.61,
    height: height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  upperLeftContainer: {
    width: width * 0.39,
    height: height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarContainer: {
    width: width * 0.32,
    height: width * 0.32,
    backgroundColor: WHITE,
    borderRadius: width * 0.16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageStyle: {
    width: width * 0.3,
    height: width * 0.3,
  },

  colouredBorder: {
    borderWidth: width * 0.01,
    borderRadius: width * 0.05,
    borderColor: BACKGROUNDCOLOR2,
    backgroundColor: 'white',
    width: width * 0.8,
    height: height * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.01,
  },

  iconSphere: {
    width: width * 0.05,
    height: width * 0.05,
    backgroundColor: BACKGROUNDCOLOR2,
    borderRadius: width * 0.05,
    marginHorizontal: width * 0.02,
  },

  minorSpace: {
    width: width * 0.03,
  },
});
