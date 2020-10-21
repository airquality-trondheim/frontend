import { useNavigation } from '@react-navigation/native';
import { Button, Grid, Row } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AQBarChart from '../components/airquality/BarChart';
import { LIGHTBLUE, WHITE, DARKRED } from '../constants/Colors';
import { height, width } from '../constants/Layout';

function ProfilePage() {
  const navigation = useNavigation();
  return (
    <Grid>
      <Row size={4}>
        <View style={[styles.centeredView, styles.profileView]}>
          <AQBarChart />
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

export default ProfilePage;

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
  },
});
