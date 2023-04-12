import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ btnText, bgColor, onPressFunc }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: bgColor }]}
      onPress={onPressFunc}
    >
      <Text style={styles.text}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    // width: 200,
    height: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 6,

    elevation: 8, // for android

    // These are for ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.4,
  },
  text: {
    color: "white",
    fontSize: 15,
    fontWeight: 500,
  },
});
