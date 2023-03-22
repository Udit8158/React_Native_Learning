import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, View, Text } from "react-native";
import CourseGoalInput from "./src/components/CourseGoalInput";
import CourseGoalList from "./src/components/CourseGoalList";

export default function App() {
  // Local state
  const [goals, setGoals] = useState([]);
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView>
      <StatusBar style="white" />
      <View style={styles.headerBtnContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.showModalBtn,
            pressed && styles.showModalBtnPressed,
          ]}
          onPress={() => setShowModal(true)}
        >
          <Text style={styles.showModalBtnText}>Add New Goal</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        {/* Goal Input */}
        {showModal && (
          <CourseGoalInput
            setGoals={setGoals}
            enteredGoalText={enteredGoalText}
            setEnteredGoalText={setEnteredGoalText}
            setShowModal={setShowModal}
          />
        )}
        {/* Goal List */}
        <CourseGoalList goalsData={goals} setGoals={setGoals} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 1,
    paddingTop: 50,
    height: "100%",
    // backgroundColor: 'red'
  },
  headerBtnContainer: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  showModalBtn: {
    backgroundColor: "#5fc96f",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  showModalBtnPressed: {
    backgroundColor: "#4e9c59",
  },
  showModalBtnText: {
    fontSize: 14,
    fontWeight: 500,
  },
});
