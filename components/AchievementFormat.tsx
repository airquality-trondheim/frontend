import { Button, Row, Text } from 'native-base';
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
              marginVertical: width * 0.01,
            }}
          >
            <Text style={{ fontSize: 50 }}>
              {String.fromCodePoint(data.achievementSymbol)}
            </Text>
            <Text style={{ flexWrap: 'wrap', fontSize: 10 }}>
              {data.achievementName}
            </Text>
          </View>
          <Modal transparent={true} visible={modVisible} animationType="fade">
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}
            >
              <View
                style={{
                  width: width * 0.9,
                  height: height * 0.7,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  borderRadius: 20,
                  alignItems: 'center',
                }}
              >
                <Row size={1}>
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Text style={[styles.TextFormat, { fontSize: 35 }]}>
                      {data.achievementName}
                    </Text>
                  </View>
                </Row>
                <Row size={8}>
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Text style={{ fontSize: 250 }}>
                      {String.fromCodePoint(data.achievementSymbol)}
                    </Text>
                    <Text>{data.achievementDescription}</Text>
                  </View>
                </Row>
                <Row
                  size={1}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    style={{
                      width: width * 0.2,
                      height: height * 0.04,
                      backgroundColor: BACKGROUNDCOLOR2,
                      borderRadius: 15,
                    }}
                    onPress={updateModal}
                  >
                    <Text style={{ fontSize: 20 }}>Lukk</Text>
                  </Button>
                </Row>
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