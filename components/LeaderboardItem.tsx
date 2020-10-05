import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { EVENROWCOLOR, GRAY, ODDROWCOLOR } from '../constants/Colors';
import { LeaderboardElement } from '../types/_types';

export default function LeaderboardItem({
  item,
  index,
}: {
  item: LeaderboardElement;
  index: number;
}) {
  const rowColor = index % 2 === 0 ? EVENROWCOLOR : ODDROWCOLOR;
  return (
    <View style={[styles.listItem, { backgroundColor: rowColor }]}>
      <View style={styles.leftItems}>
        <View style={{ flex: 1 }}>
          <Text style={styles.rank}>{index + 1}</Text>
        </View>
        <View style={{ flex: 6 }}>
          <Text style={styles.username} numberOfLines={1}>
            {item['username']}
          </Text>
        </View>
      </View>
      <Text style={styles.score}>{item['points']}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: GRAY,
  },
  leftItems: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 50,
  },
  rank: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    paddingRight: 10,
  },
  username: {
    fontSize: 17,
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    right: 15,
    paddingLeft: 15,
  },
});
