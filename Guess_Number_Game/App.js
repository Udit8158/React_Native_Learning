import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./Constants/Colors";

export default function App() {
  // Local stae (Actually it is gobla state)
  const [userGuessNumber, setUserGuessNumber] = useState("");
  const [guessCount, setGuessCount] = useState(1);

  // Managin screens
  const [chosedScreen, setChosedScreen] = useState(0);
  const pickScreenHandler = (pickNumber) => setChosedScreen(pickNumber);

  // New game function
  const startNewGame = () => {
    setUserGuessNumber("");
    setGuessCount(1);
    pickScreenHandler(0);
  };

  // All screens
  const screens = [
    <StartGameScreen
      onPickScreenHandler={pickScreenHandler}
      setUserGuessNumber={setUserGuessNumber}
    />,
    <GameScreen
      userGuessNumber={userGuessNumber}
      onPickScreenHandler={pickScreenHandler}
      guessCount={guessCount}
      setGuessCount={setGuessCount}
    />,
    <GameOverScreen
      userGuessNumber={userGuessNumber}
      guessCount={guessCount}
      startNewGame={startNewGame}
    />,
  ];

  return (
    <LinearGradient
      colors={[Colors.primary600, Colors.secondary500]}
      style={styles.rootScreen}
    >
      <StatusBar style="light" />
      <ImageBackground
        source={require("./assets/images/background_image.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView>{screens[chosedScreen]}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
