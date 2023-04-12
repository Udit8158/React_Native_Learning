import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomTitle from "../components/UI/CustomTitle";
import Colors from "../Constants/Colors";
import CustomButton from "../components/UI/CustomButton";

const GameOverScreen = ({ userGuessNumber, guessCount, startNewGame }) => {
  return (
    <View style={styles.gameOverContaienr}>
      <CustomTitle text={"Game Over"} size={30} />
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/Game_Over_Success_Image.png")}
          style={styles.gameOverImage}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone Needed{" "}
        <Text style={{ color: Colors.secondary500, fontWeight: 800 }}>
          {guessCount}
        </Text>{" "}
        Times To Guess{" "}
        <Text style={{ color: Colors.secondary500, fontWeight: 800 }}>
          {userGuessNumber}
        </Text>
      </Text>
      <View style={styles.btnContainer}>
        <CustomButton
          btnText={"Start a new Game"}
          bgColor={Colors.primary600}
          onPressFunc={startNewGame}
        />
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  gameOverContaienr: {
    paddingTop: 40,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  gameOverImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // half of width and height
    borderWidth: 3,
    borderColor: Colors.secondary500,
  },
  summaryText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    fontWeight: 500,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    marginTop: 50,
  },
});
