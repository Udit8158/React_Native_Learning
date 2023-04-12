import { StyleSheet, Text } from "react-native";
import React from "react";

const CustomTitle = ({ text, size }) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: size,
      fontWeight: 700,
      textAlign: "center",
      color: "#ddb52f",
    },
  });
  return <Text style={styles.title}>{text}</Text>;
};

export default CustomTitle;
