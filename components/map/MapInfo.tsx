import React, { useEffect, useRef, useState } from 'react';
import InfoButton from '../InfoButton';
import { View, StyleSheet } from 'react-native';
import { singleSideMargin } from '../../constants/Layout';
import MapInfoModal from '../map/MapInfoModal';

export default function MapInfo() {
  const [modalVisible, setModalVisible] = useState(false);
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  const updateModalVisible = () => {
    if (!unmounted.current) {
      setModalVisible(!modalVisible);
    }
  };

  return (
    <View style={styles.view}>
      <InfoButton onPress={updateModalVisible} />
      <MapInfoModal
        onCloseButtonPress={updateModalVisible}
        modalVisible={modalVisible}
        modalOnRequestClose={updateModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    right: 0,
    top: 0,
    marginRight: singleSideMargin / 2,
    marginTop: singleSideMargin / 2,
  },
});