import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Row, Text } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { BLACK, EVENROWCOLOR, LIGHTGRAY } from '../../constants/Colors';
import { height, width } from '../../constants/Layout';
import { AchievementCardElement } from '../../types/_types';
import CloseButton from '../CloseButton';

const AchievementFormat = (props: {
  data: AchievementCardElement;
  index: number;
}) => {
  const { data, index } = props;
  const [modVisible, setModVisible] = useState(false);
  const unmounted = useRef(false);

  const [colour, achievedText] =
    data.date === undefined
      ? [LIGHTGRAY, 'Ikke oppnåd ennå']
      : [BLACK, String(data.date).substring(0, 10)];

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  const updateModal = () => {
    if (!unmounted.current) {
      setModVisible(!modVisible);
    }
  };

  return (
    <View key={index} style={styles.AchievementBox}>
      <TouchableOpacity onPress={updateModal} style={styles.touchableStyle}>
        <View style={[styles.achievement, { marginVertical: width * 0.01 }]}>
          <MaterialCommunityIcons name="trophy" size={50} color={colour} />
          <Text style={styles.wrappingText}>{data.achievementName}</Text>
        </View>
      </TouchableOpacity>
      <Modal transparent={true} visible={modVisible} animationType="fade">
        <View style={styles.centerContent}>
          <View style={styles.modalView}>
            <Row size={2}>
              <View style={styles.centerContent}>
                <Text style={[styles.TextFormat, { fontSize: 35 }]}>
                  {data.achievementName}
                </Text>
              </View>
            </Row>
            <Row size={8}>
              <View style={styles.centerContent}>
                <MaterialCommunityIcons
                  name="trophy"
                  size={240}
                  color={colour}
                />
                <Text style={styles.centerText}>Oppnådd: {achievedText}</Text>
                <Text style={styles.centerText}>
                  {data.achievementDescription}
                </Text>
              </View>
            </Row>
            <Row size={1} style={styles.centerContent}>
              <CloseButton onPress={updateModal} />
            </Row>
          </View>
        </View>
      </Modal>
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
  achievement: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  TextFormat: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrappingText: {
    flexWrap: 'wrap',
    fontSize: 10,
    textAlign: 'center',
  },
  modalView: {
    width: width * 0.9,
    height: height * 0.7,
    backgroundColor: EVENROWCOLOR,
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  touchableStyle: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 10,
    alignItems: 'center',
  },
});
