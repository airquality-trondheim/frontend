import { Button, Text } from 'native-base';
import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
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
    console.log('her ja');
  };

  return (
    <View
      key={index}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: width * 0.2,
        width: width * 0.2,
        margin: 15,
      }}
    >
      <TouchableHighlight onPress={updateModal} style={[styles.buttonStyle]}>
        <View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
            }}
          >
            <Text style={[styles.TextFormat, { fontSize: 50 }]}>
              {String.fromCodePoint(data.achievementSymbol)}
            </Text>
          </View>
          <Modal transparent={true} visible={modVisible}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View
                style={{
                  width: width * 0.9,
                  height: height * 0.7,
                  backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View style={{ flex: 8 }}>
                  <View>
                    <Text>{data.achievementName}</Text>
                  </View>
                  <Text>{data.achievementDescription}</Text>
                </View>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'center' }}
                >
                  <Button
                    style={{
                      width: width * 0.1,
                      height: height * 0.1,
                      backgroundColor: 'blue',
                      flex: 1,
                    }}
                    onPress={updateModal}
                  ></Button>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </TouchableHighlight>
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
    width: width * 0.2,
    height: width * 0.2,
    backgroundColor: BACKGROUNDCOLOR4,
    borderRadius: 10,
    alignItems: 'center',
  },
});
