import React, { useEffect, useState } from 'react';
import { Row, Col, Text, Switch, View } from 'native-base';
import { StyleSheet } from 'react-native';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Auth } from 'aws-amplify';
import { LIGHTBLUE, LIGHTGRAY } from '../../constants/Colors';

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
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  useEffect(() => {
    if (Auth.Credentials.Auth.user !== null) {
      console.log('Store setting in DB');
    }
  }, []);
  useEffect(() => {
    storeData(isEnabled, elementName);
  }, [elementName, isEnabled]);
  return (
    <Row style={styles.elementRow}>
      <Col size={9}>
        <Text style={[styles.elementName, { color: Colors[colorScheme].text }]}>
          {elementName}
        </Text>
        <Text style={styles.elementDesc}>{elementDesc}</Text>
      </Col>
      <Col size={3} style={styles.leftColPlacement}>
        {elementTrigger ? (
          <Switch
            trackColor={{ false: LIGHTGRAY, true: LIGHTBLUE }}
            thumbColor="#f4f3f4"
            ios_backgroundColor={LIGHTGRAY}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate(elementNavigator)}
            >
              <MaterialIcons
                name="keyboard-arrow-right"
                size={40}
                color={LIGHTBLUE}
              />
            </TouchableOpacity>
          </View>
        )}
      </Col>
    </Row>
  );
};

export default SettingElement;

const storeData = async (value: boolean, storageKey: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    // saving error
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
