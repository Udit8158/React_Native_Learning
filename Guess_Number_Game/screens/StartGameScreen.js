import { StyleSheet, View } from "react-native";
import NumberInput from "../components/StartGameScreenComponents/NumberInput";
import CustomTitle from "../components/UI/CustomTitle";

const StartGameScreen = ({ onPickScreenHandler, setUserGuessNumber }) => {
  // console.log(userGuessNumber);
  const handleUserGuessNumber = (number) => {
    setUserGuessNumber(number);
    onPickScreenHandler(1);
  };

  return (
    <View style={styles.startGameContainer}>
      <CustomTitle text={"Enter Your Guess Number (1 to 99)"} size={20} />
      <NumberInput handleUserGuessNumber={handleUserGuessNumber} />
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  startGameContainer: {
    paddingTop: 100,
  },
});
