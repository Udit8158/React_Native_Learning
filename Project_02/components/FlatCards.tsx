import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View style={styles.flatCardContainer}>
      <Text style={styles.flatCardText}>Flat Cards</Text>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.cardText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.cardText}>Green</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  flatCardContainer: {
    marginTop: 8,
    paddingHorizontal: 10,
    // backgroundColor: 'white',
  },
  flatCardText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    // padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardText: {
    fontWeight: '600',
    fontSize: 18,
  },
  cardOne: {
    backgroundColor: '#DE4839',
  },
  cardTwo: {
    backgroundColor: '#1B98F5',
  },
  cardThree: {
    backgroundColor: '#4CAF50',
  },
});
