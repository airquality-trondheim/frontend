import { useNavigation } from '@react-navigation/native';
import { Button, Grid, Row } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { getProfileData } from '../actions/profileActions';
import { RootState } from '../reducers';
import { Dispatch } from 'redux';
import { RootAction } from '../actions/types';
import { LIGHTBLUE, WHITE, DARKRED } from '../constants/Colors';
import { height, width } from '../constants/Layout';
import { ProfileTextContainer } from '../components/ProfileTextContainer';
import { Ionicons, Foundation } from '@expo/vector-icons';
import { Auth } from 'aws-amplify';
import ProfileDropdown from '../components/ProfileDropdown';

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

type UserProfileProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function ProfilePage(props: UserProfileProps) {
  const navigation = useNavigation();
  const { userProfile, fetchUserProfile } = props;
  const userInformation =
    Auth?.Credentials?.Auth?.user?.signInUserSession?.idToken?.payload;

  useEffect(() => {
    fetchUserProfile(userInformation?.sub);
  }, [fetchUserProfile, userInformation]);

  const formatProfileLevelText =
    userProfile.level === undefined
      ? 'Nivå ? - ???? poeng'
      : 'Nivå ' + userProfile.level + ' - ' + userProfile.points + ' poeng';

  const formatProfileNameText =
    userProfile.username == undefined
      ? 'Inkognito Impala'
      : userProfile.username;

  const formatMail =
    userInformation.email === undefined
      ? 'fill in mail'
      : userInformation.email;
  const formatTelefon =
    userInformation.phone_number === undefined
      ? 'fill in telephone'
      : userInformation.phone_number;
  // const formatLocation =
  //   userProfile.homeArea === undefined ? 'location' : userProfile.homeArea;
  // const formatBirthdate =
  //   userProfile.birthdate === undefined
  //     ? 'fill in birthdate'
  //     : userProfile.birthdate;
  // const formatStreet =
  //   userProfile.street === undefined ? 'fill in street' : userProfile.street;
  // const formatPostalCode =
  //   userProfile.postalcode === undefined ? 'Area' : userProfile.postalcode;

  return (
    <Grid>
      <Row size={4}>
        <View>
          <View style={styles.profileView}>
            <View style={styles.upperLeftContainer}>
              <View style={styles.avatarContainer}>
                <View style={{ width: width * 0.2 }}>
                  <Image
                    source={{ uri: userProfile.avatar }}
                    style={{ width: 80, height: 80 }}
                  />
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
            style={{ alignItems: 'center', width: width, height: height * 0.4 }}
          >
            <ProfileDropdown />
            <ProfileTextContainer text={formatMail}>
              <Ionicons name="ios-mail" size={20} color={LIGHTBLUE} />
            </ProfileTextContainer>
            <ProfileTextContainer text={formatTelefon}>
              <Foundation name="telephone" size={20} color={LIGHTBLUE} />
            </ProfileTextContainer>
            {/* <ProfileTextContainer text={formatBirthdate}>
              <FontAwesome name="birthday-cake" size={20} color={LIGHTBLUE}  />
            </ProfileTextContainer>
            <View style={{ flexDirection: 'row' }}>
              <ProfileTextContainer
                text={formatLocation}
                outerWidth={width * 0.47}
              >
                <FontAwesome name="map" size={18} color="#51adcf" />
              </ProfileTextContainer>
              <View style={styles.minorSpace} />
              <ProfileTextContainer
                text={formatPostalCode}
                outerWidth={width * 0.3}
              >
                <Entypo name="location-pin" size={20} color="#51adcf" />
              </ProfileTextContainer>
            </View>
            <ProfileTextContainer text={formatStreet}>
              <Fontisto name="direction-sign" size={20} color={LIGHTBLUE} />
            </ProfileTextContainer> */}
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
            onPress={signOut}
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
    height: height * 0.05,
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
});
