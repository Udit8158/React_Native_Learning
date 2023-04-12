import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomTitle from "../components/UI/CustomTitle";
import GuessNumberContainer from "../components/GameScreenComponents/GuessNumberContainer";
import AdjustGuessContainer from "../components/GameScreenComponents/AdjustGuessContainer";

// Generating random number withing 2 numbers
const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  // console.log(min, max);
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return randomNumber;

  // It generate number -> [min, max)  [Including min but excluding max]
};

let minBoundary = 1;
let maxBoundary = 100; // generating [1, 99]

const GameScreen = ({
  userGuessNumber,
  onPickScreenHandler,
  guessCount,
  setGuessCount,
}) => {
  // Local state variables
  const initaialGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    userGuessNumber
  );

  const [computerGuess, setComputerGuess] = useState(initaialGuess);

  // Check for game over
  useEffect(() => {
    if (parseInt(userGuessNumber) === computerGuess) {
      console.log(guessCount);
      onPickScreenHandler(2); // switching to game over screen
    }
  }, [computerGuess]);

  // console.log(guessCount);
  // Adjust guess number
  const incrementGuessHandler = () => {
    // Validate the instruction
    if (computerGuess >= userGuessNumber) {
      Alert.alert("Don't Lie", "You are giving wrong instructions", [
        {
          text: "OK",
          style: "destructive",
        },
      ]);
      return;
    }
    minBoundary = computerGuess + 1;
    setComputerGuess(generateRandomNumber(minBoundary, maxBoundary, 0));
    setGuessCount((curr) => curr + 1);
  };
  const decrementGuessHandler = () => {
    // Validate the instruction
    if (computerGuess <= userGuessNumber) {
      Alert.alert("Don't Lie", "You are giving wrong instructions", [
        {
          text: "OK",
          style: "destructive",
        },
      ]);
      return;
    }

    maxBoundary = computerGuess;
    setComputerGuess(generateRandomNumber(minBoundary, maxBoundary, 0));
    setGuessCount((curr) => curr + 1);
  };

  return (
    <View style={styles.gameScreenContainer}>
      <CustomTitle text={"Computer's Guess"} size={25} />

      <GuessNumberContainer guess={computerGuess} />
      <AdjustGuessContainer
        onIncrement={incrementGuessHandler}
        onDecrement={decrementGuessHandler}
      />

      <View>{/* Logs Rounds */}</View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    // flex: 1,
    paddingTop: 100,
  },
});
