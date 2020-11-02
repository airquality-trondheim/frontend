import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import { Auth } from 'aws-amplify';
import axios from 'axios';

const apiUrl = 'http://ec2-18-192-82-31.eu-central-1.compute.amazonaws.com';

export async function postPushNotificationToken(
  token: string,
  allowPushNotifications: boolean,
) {
  try {
    await axios.put(
      `${apiUrl}/users/${Auth.Credentials.Auth.user.signInUserSession.accessToken.payload.sub}/settings`,
      {
        pushNotifications: allowPushNotifications,
        pushToken: token,
      },
      {
        headers: {
          accesstoken:
            Auth.Credentials.Auth.user.signInUserSession.accessToken.jwtToken,
        },
      },
    );
  } catch (error) {
    console.log('Error:', error);
  }
}

export async function sendPushNotification(
  title: string,
  body?: string,
  data?: object,
) {
  const token = await getPushTokenAsync();
  const message = {
    to: token,
    sound: 'default',
    title: title,
    body: body,
    data: data,
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

export async function getPushTokenAsync() {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  if (status === 'granted') {
    const token = await Notifications.getExpoPushTokenAsync();
    return token.data;
  } else {
    return '';
  }
}

export const registerForPushNotificationsAsync = async () => {
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS,
    );
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    postPushNotificationToken(token, finalStatus === 'granted');
  } else {
    alert('Must use physical device for Push Notifications');
  }

  // Android requires creation of a notification channel
  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
      sound: 'true',
    });
  }
};
