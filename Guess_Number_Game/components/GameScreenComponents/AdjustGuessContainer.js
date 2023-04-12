import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../UI/CustomButton";
import Colors from "../../Constants/Colors";
import { Entypo } from "@expo/vector-icons";

const AdjustGuessContainer = ({ onIncrement, onDecrement }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Higher or Lower ?</Text>
      <View style={styles.btnContainer}>
        <CustomButton
          btnText={<Entypo name="minus" size={24} color="white" />}
          bgColor={Colors.primary500}
          onPressFunc={onDecrement}
        />
        <CustomButton
          btnText={<Entypo name="plus" size={24} color="white" />}
          bgColor={Colors.primary500}
          onPressFunc={onIncrement}
        />
      </View>
    </View>
  );
};

export default AdjustGuessContainer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: 60,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 600,
    color: Colors.secondary500,
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 50,
    marginTop: 20,
  },
});
