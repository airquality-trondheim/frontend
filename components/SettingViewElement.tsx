import React, { useState } from 'react';
import { Row, Col, Text, Switch } from 'native-base';
import { StyleSheet } from 'react-native';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

type SettingElementProps = {
  elementName: string;
  elementDesc: string;
  elementTrigger: boolean;
};

const SettingElement = ({
  elementName,
  elementDesc,
  elementTrigger,
}: SettingElementProps) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
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
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor="#f4f3f4"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        ) : (
          <TouchableOpacity
            style={{ backgroundColor: 'red' }}
            onPress={() => navigation.navigate('/')}
          >
            <MaterialIcons
              name="keyboard-arrow-right"
              size={40}
              color="black"
            />
          </TouchableOpacity>
        )}
      </Col>
    </Row>
  );
};

export default SettingElement;

const styles = StyleSheet.create({
  elementRow: {
    paddingBottom: 20,
  },
  elementName: {
    fontSize: 16,
  },
  elementDesc: {
    fontSize: 12,
    paddingRight: 20,
  },
  leftColPlacement: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    paddingRight: 19,
  },
});
