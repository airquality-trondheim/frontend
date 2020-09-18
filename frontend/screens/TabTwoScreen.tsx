import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import Amplify from 'aws-amplify';
import config from '../aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from 'aws-amplify';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

function TabTwoScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Hello {Auth.Credentials.Auth.user.username}
      </Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <EditScreenInfo path='/screens/TabTwoScreen.tsx' />
      <View>
        <TouchableOpacity onPress={signOut}>
          <Text lightColor={Colors.light.tint}>Click here to log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default withAuthenticator(TabTwoScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
