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
    <View key={index} style={styles.AchievementBox}>
      <TouchableHighlight onPress={updateModal} style={[styles.touchableStyle]}>
        <View>
          <View
            style={[styles.centerContent, { marginVertical: width * 0.01 }]}
          >
            <Text style={styles.FontSize50}>
              {String.fromCodePoint(data.achievementSymbol)}
            </Text>
            <Text style={styles.wrappingText}>
              {data.achievementName}
            </Text>
          </View>
          <Modal transparent={true} visible={modVisible} animationType="fade">
            <View style={[styles.centerContent, { flex: 1 }]}>
              <View style={styles.modalView}>
                <Row size={1}>
                  <View style={styles.centerContent}>
                    <Text style={[styles.TextFormat, { fontSize: 35 }]}>
                      {data.achievementName}
                    </Text>
                  </View>
                </Row>
                <Row size={8}>
                  <View style={styles.centerContent}>
                    <Text style={styles.FontSize250}>
                      {data === undefined ? '': String.fromCodePoint(data.achievementSymbol)}
                    </Text>
                    <Text>{data.achievementDescription}</Text>
                  </View>
                </Row>
                <Row size={1} style={styles.centerContent}>
                  <Button style={styles.buttonStyle} onPress={updateModal}>
                    <Text style={styles.FontSize20}>Lukk</Text>
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
  AchievementBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: width * 0.2,
    width: width * 0.2,
    margin: width * 0.0383,
  },

  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  TextFormat: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 50,
    color: 'black',
  },

  FontSize250: {
     fontSize: 250 
  },

  FontSize50:{ 
    fontSize: 50 
  },

  FontSize20: { 
    fontSize: 20 
  },

  wrappingText:{ 
    flexWrap: 'wrap',
    fontSize: 10
  },

  modalView: {
    width: width * 0.9,
    height: height * 0.7,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 10 },
    elevation: 1,
    shadowOpacity: 0.2,
  },

  touchableStyle: {
    width: width * 0.2,
    height: width * 0.2,
    backgroundColor: BACKGROUNDCOLOR4,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonStyle: {
    width: width * 0.2,
    height: height * 0.04,
    backgroundColor: BACKGROUNDCOLOR2,
    borderRadius: 15,
  },
});
