import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SECONDARY, WHITE } from '../../constants/Colors';
import { height, width } from '../../constants/Layout';

type profileTextContainerInterface = {
  text: string;
  outerWidth?: number;
  children: React.ReactNode;
};

const ProfileTextContainer = ({
  text,
  outerWidth = width * 0.8,
  children,
}: profileTextContainerInterface) => {
  return (
    <View style={[styles.colouredBorder, { width: outerWidth }]}>
      <View style={styles.iconStyle}>{children}</View>
      <Text style={styles.textFormat}>{text}</Text>
    </View>
  );
};

export { ProfileTextContainer };

const styles = StyleSheet.create({
  colouredBorder: {
    borderWidth: width * 0.01,
    borderRadius: width * 0.05,
    borderColor: SECONDARY,
    backgroundColor: WHITE,
    height: height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.015,
  },

  iconStyle: {
    width: width * 0.05,
    height: width * 0.05,
    marginLeft: width * 0.02,
  },

  textFormat: {
    marginLeft: width * 0.02,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
