import React, { useEffect, useState } from 'react';
import { Row, Col, Text, Switch, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { LIGHTBLUE, LIGHTGRAY } from '../../constants/Colors';
import {
  postPushNotificationToken,
  registerForPushNotificationsAsync,
} from '../../queries/pushNotificationToken';

type SettingElementProps = {
  elementName: string;
  elementDesc: string;
  elementTrigger: boolean;
  elementNavigator: string;
};

const SettingElement = ({
  elementName,
  elementDesc,
  elementTrigger,
  elementNavigator,
}: SettingElementProps) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation();
  const toggleSwitch = async () => {
    const allowPushNotifications = !isEnabled;
    try {
      if (allowPushNotifications) {
        await registerForPushNotificationsAsync();
      } else {
        await postPushNotificationToken('', false);
      }
      setIsEnabled(allowPushNotifications);
      storeData(allowPushNotifications, elementName);
    } catch (error) {
      alert('Det oppstod ett problem. Kunne ikke oppdatere innstillingene.');
    }
  };

  useEffect(() => {
    async function updateValue() {
      const storedValue = await getStoreData(elementName);
      if (storedValue) {
        setIsEnabled(storedValue);
      } else {
        storeData(isEnabled, elementName);
      }
    }
    updateValue();
  }, [elementName, isEnabled]);

  return (
    <TouchableOpacity
      onPress={() => {
        if (elementTrigger) {
          toggleSwitch();
        } else {
          navigation.navigate(elementNavigator);
        }
      }}
    >
      <Row style={styles.elementRow}>
        <Col size={9}>
          <Text style={styles.elementName}>{elementName}</Text>
          <Text style={styles.elementDesc}>{elementDesc}</Text>
        </Col>
        <Col size={3} style={styles.leftColPlacement}>
          {elementTrigger ? (
            <Switch
              trackColor={{ false: LIGHTGRAY, true: LIGHTBLUE }}
              thumbColor="#f4f3f4"
              ios_backgroundColor={LIGHTGRAY}
              value={isEnabled}
            />
          ) : (
            <View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={40}
                color={LIGHTBLUE}
              />
            </View>
          )}
        </Col>
      </Row>
    </TouchableOpacity>
  );
};

export default SettingElement;

const storeData = async (value: boolean, storageKey: string) => {
  //Copyright (c) 2015-present, Facebook, Inc.
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    console.log('Error storing data in settings');
  }
};

const getStoreData = async (storageKey: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    if (jsonValue) {
      return JSON.parse(jsonValue);
    }
    return '';
  } catch (e) {
    console.log('Error getting data from settings');
  }
};

const styles = StyleSheet.create({
  elementRow: {
    paddingBottom: 7,
    marginBottom: 20,
    borderBottomColor: LIGHTGRAY,
    borderBottomWidth: 2,
  },
  elementName: {
    fontSize: 16,
  },
  elementDesc: {
    fontSize: 12,
    paddingRight: 30,
  },
  leftColPlacement: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    paddingRight: 19,
  },
});
