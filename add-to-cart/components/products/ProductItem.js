import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cart-slice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.productItemContainer}>
      <View style={styles.productImageContainer}>
        <Image
          style={styles.productImage}
          source={{
            uri: product.image,
          }}
        />
        {/* Name */}
        <View style={styles.productTextContainer}>
          <Text style={{ fontSize: 18, fontWeight: "600", opacity: 0.8 }}>
            {product.name}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "500", opacity: 0.5 }}>
            {product.category}
          </Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={{ fontSize: 16, fontWeight: "600", opacity: 0.6 }}>
          MRP {product.price}
        </Text>
        <TouchableOpacity
          style={styles.addCartBtn}
          onPress={() => dispatch(addItemToCart(product))}
        >
          <Text style={{ fontSize: 14, fontWeight: "600", opacity: 0.8 }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productItemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginTop: 10,
    borderRadius: 12,

    // elevation
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  productImageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },

  productTextContainer: {
    gap: 2,
  },

  productImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  rightContainer: {
    gap: 20,
  },

  addCartBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#7FFFD4",
    padding: 8,
    borderRadius: 8,
  },
});
