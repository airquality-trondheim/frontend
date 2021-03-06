import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import Navigation from './navigation';
import store from './store';

import Amplify from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
}

export default withAuthenticator(App);
