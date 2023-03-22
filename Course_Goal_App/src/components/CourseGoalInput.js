import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import React from "react";

const CourseGoalInput = ({ setGoals, enteredGoalText, setEnteredGoalText, setShowModal }) => {
  // Functions
 
  const hideModalHandler = () => setShowModal(false)

  const goalAddHandler = () => {
    setGoals((curr) => [...curr, { text: enteredGoalText, id: Math.random() }]);
    setEnteredGoalText("");
    hideModalHandler()
  };
  const goalInputHandler = (text) => {
    setEnteredGoalText(text);
  };

  return (
    <Modal animationType="slide">
      <View style={styles.goalInput}>
      <Image source={require('../../assets/images/goal_image.png')} style={{width: 100, height: 100, marginBottom: 20}}/>
      <TextInput
        placeholder="Enter your goal"
        style={styles.goalInputField}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.btnContainer}>
      <TouchableOpacity style={[styles.btn , styles.goalAddBtn]} onPress={goalAddHandler}>
        <Text style={styles.goalAddBtnTxt}>Add goal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn]} onPress={hideModalHandler}>
        <Text style={styles.goalAddBtnTxt}>Cancel</Text>
      </TouchableOpacity>
      </View>
    </View>
    </Modal>
  );
};

export default CourseGoalInput;

const styles = StyleSheet.create({
  goalInput: {
    display: 'flex',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 200
    paddingHorizontal: 10,
    backgroundColor: '#dcfae0'
  },
  goalInputField: {
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 20,
    paddingVertical: 20,
    margin: 10,
    borderRadius: 10,
    width: '100%',
    fontSize: 20,
    backgroundColor: '#a2ebad'
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 20,
    width: '100%'
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  goalAddBtnTxt: {
    color: "white",
    fontSize: 15,
  },
});
