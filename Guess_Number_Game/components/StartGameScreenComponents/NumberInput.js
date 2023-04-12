import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import CustomButton from "../UI/CustomButton";
import Colors from "../../Constants/Colors";

const NumberInput = ({ handleUserGuessNumber }) => {
  const [userInput, setUserInput] = useState("");

  // Handle user input
  const handleUserInput = (input) => setUserInput(input);
  //   console.log("Hey,", userInput);

  // Handle confirmation event
  const handleConfirmation = (text) => {
    const userGuessInput = parseInt(text);

    // validation
    if (isNaN(userGuessInput) || userGuessInput <= 0 || userGuessInput >= 100) {
      Alert.alert(
        "Invalid Guess Number",
        "Please enter a valid guess number between 1 to 99",
        [
          {
            text: "Cancel",
            onPress: () => setUserInput(""),
            style: "destructive",
          },
        ]
      );

      return;
    }

    handleUserGuessNumber(text);
  };
  return (
    <View style={styles.numberInputContainer}>
      <TextInput
        style={styles.numberInputField}
        keyboardType="numeric"
        maxLength={2}
        value={userInput}
        onChangeText={(text) => handleUserInput(text)}
      />
      <View style={styles.btnContainer}>
        <CustomButton
          btnText={"Reset"}
          bgColor={Colors.primary500}
          onPressFunc={() => setUserInput("")}
        />
        <CustomButton
          btnText={"Confirm"}
          bgColor={Colors.primary500}
          onPressFunc={() => handleConfirmation(userInput)}
        />
      </View>
    </View>
  );
};

export default NumberInput;

const styles = StyleSheet.create({
  numberInputContainer: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary600,
    marginTop: 50,
    marginHorizontal: 20,
    borderRadius: 10,
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
  numberInputField: {
    // height: 40,
    // width: "100%",
    width: 100,
    // paddingHorizontal: 40,
    paddingVertical: 2,
    fontSize: 35,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: Colors.secondary500,
    color: Colors.secondary500,
    textAlign: "center",
  },
  btnContainer: {
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 40,
  },
});
