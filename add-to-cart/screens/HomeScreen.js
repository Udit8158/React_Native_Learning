import { FlatList, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React, { useLayoutEffect } from "react";
import ProductItem from "../components/products/ProductItem";
import products from "../data/products";

const HomeScreen = ({ navigation }) => {
  // Adjust the header
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Products", // Set the title
      headerStyle: {
        backgroundColor: "#7FFFD4", // Set the background color
      },
      headerTintColor: "#000", // Set the text color
      headerTitleStyle: {
        fontWeight: "bold", // Set the text style
      },
      headerRight: () => (
        <View style={{ marginRight: 10 }}>
          <Entypo
            name="shopping-cart"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Cart")}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.homeContainer}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "500",
          opacity: 0.7,
          textAlign: "center",
        }}
      >
        Our Products
      </Text>

      {/* Optimize scrollable product list */}
      <FlatList
        data={products}
        renderItem={(product) => <ProductItem product={product.item} />}
        keyExtractor={(product) => product.id}
        style={styles.productsContainer}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    padding: 10,
    gap: 15,
    paddingTop: 20,
  },
  productsContainer: {
    marginBottom: 100,
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
});
