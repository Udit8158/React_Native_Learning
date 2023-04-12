import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../Constants/Colors";

const GuessNumberContainer = ({ guess }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{guess}</Text>
    </View>
  );
};

export default GuessNumberContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary600,
    marginHorizontal: 50,
    padding: 30,
    borderRadius: 8,
    marginTop: 20,

    elevation: 10, // for android

    // These are for ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    shadowOpacity: 0.4,
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: 700,
    textAlign: "center",
  },
});
