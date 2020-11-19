import { Grid, Row } from 'native-base';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BLACK, CAROUSELITEM } from '../constants/Colors';
import { singleSideMargin, width, carouselHeight } from '../constants/Layout';

type CarouselItemType = {
  leftMostItem?: boolean;
  rightMostItem?: boolean;
  headerText: string;
  children?: React.ReactNode;
};

const CarouselItem = ({
  leftMostItem = false,
  rightMostItem = false,
  headerText,
  children,
}: CarouselItemType) => {
  return (
    <View
      style={
        leftMostItem
          ? { ...styles.containerStyle, marginLeft: singleSideMargin }
          : rightMostItem
          ? { ...styles.containerStyle, marginRight: singleSideMargin }
          : styles.containerStyle
      }
    >
      <Grid>
        <Row size={1}>
          <View style={styles.centerContent}>
            <Text style={styles.headlineText}>{headerText}</Text>
          </View>
        </Row>
        <Row size={6}>
          <View style={styles.centerContent}>{children}</View>
        </Row>
      </Grid>
    </View>
  );
};

export { CarouselItem };

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: CAROUSELITEM,
    width: 0.43 * width,
    height: carouselHeight,
    borderRadius: 20,
    // overflow: 'hidden',
    margin: 5,
    elevation: 5,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 10,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headlineText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
