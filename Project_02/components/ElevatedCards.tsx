import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View style={styles.elevatedCardContainer}>
      <Text style={styles.elevatedCardText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Scroll</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>me</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>to</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>see</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>more</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>😃</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  elevatedCardContainer: {
    marginTop: 8,
    paddingHorizontal: 10,
    // backgroundColor: 'white',
  },
  elevatedCardText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardContainer: {
    flex: 1,
    marginTop: 10,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    // shadowColor: '#fff',
    // shadowOffset: {width: 10, height: 1},
    // shadowOpacity: 1,
    // shadowRadius: 2,
    elevation: 5,
  },

  cardText: {
    fontWeight: '600',
    fontSize: 18,
    color: 'black',
  },
});
