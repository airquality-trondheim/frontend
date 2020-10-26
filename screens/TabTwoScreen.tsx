import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

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
      <View style={styles.separator} />
      <View>
        <TouchableOpacity onPress={signOut}>
          <Text>Click here to log out</Text>
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
