import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';
import { ExpoPushToken } from 'expo-notifications';

export function postPushNotificationToken(token: ExpoPushToken) {
  // TODO: Post to backend
  console.log(`TODO: Post token: ${token} to backend.`);
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

async function getPushTokenAsync() {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  if (status === 'granted') {
    const token = await Notifications.getExpoPushTokenAsync();
    return token.data;
  } else {
    return '';
  }
}
