import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";

const CartScreen = () => {
  const cartData = useSelector((state) => state);
  console.log(cartData);
  return (
    <View style={styles.cartContainer}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "500",
          opacity: 0.7,
          textAlign: "center",
        }}
      >
        Your Cart
      </Text>

      {/* List of cart items */}
      <FlatList
        data={cartData}
        renderItem={(product) => <CartItem product={product.item} />}
        keyExtractor={(product) => product.id}
        style={styles.productsContainer}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartContainer: {
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
