import { Button, Text } from 'native-base';
import React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  BACKGROUNDCOLOR2,
  BACKGROUNDCOLOR1,
  BACKGROUNDCOLOR4,
} from '../constants/Colors';
import { height, width } from '../constants/Layout';
import { AchievementCardElement } from '../types/_types';

const AchievementFormat = (data: AchievementCardElement, index: number) => {
  const [modVisible, setModVisible] = useState(false);

  const updateModal = () => {
    setModVisible(!modVisible);
    console.log(modVisible);
  };

  return (
    <View key={index}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Button
          onPress={updateModal}
          style={[
            styles.buttonStyle,
            {
              height: 50,
              width: width * 0.6,
              margin: 4,
            },
          ]}
        >
          <View
            style={{
              flex: 4,
              flexDirection: 'row',
              alignItems: 'center',
              height: 50,
            }}
          >
            <Text style={[styles.TextFormat, { fontSize: 40 }]}>
              {'' + String.fromCodePoint(data.achievementSymbol)}
            </Text>
            <Text style={styles.TextFormat}>{'' + data.achievementName}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}></View>
        </Button>
      </View>

      <View style={styles.modalView}>
        {modVisible && (
          <Text style={[styles.TextFormat, { fontSize: 14 }]}>
            {data.achievementDescription}
          </Text>
        )}
      </View>
    </View>
  );
};

export { AchievementFormat };

const styles = StyleSheet.create({
  TextFormat: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 50,
    color: 'black',
  },

  modalView: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: BACKGROUNDCOLOR2,
  },

  buttonStyle: {
    // width: width * 0.05,
    // height: width * 0.05,
    backgroundColor: BACKGROUNDCOLOR4,
  },
});
