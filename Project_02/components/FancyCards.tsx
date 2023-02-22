import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCards = () => {
  return (
    <View style={styles.fancyCardContainer}>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/187979190/photo/hawa-mahal-palace-in-jaipur.jpg?s=612x612&w=is&k=20&c=A0dhUcX65hD2F5kb6U9DVpcTKL7oc5oIJdpiPzVz6Kc=',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
          </View>
          <Text style={styles.cardDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae eaque amet eum placeat repellat voluptatem rerum ducimus
            similique aperiam in, magnam pariatur atque molestias nostrum, odit
            porro harum? Aliquid, fugit.
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.cardFooterText}>12 mins away</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  fancyCardContainer: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
  },
  cardBody: {
    paddingHorizontal: 10,
  },
  cardHeader: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardLabel: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardDesc: {
    color: '#000',
  },
  cardFooter: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
  },
  cardFooterText: {
    color: '#000',
    fontWeight: '400',
  },
});
