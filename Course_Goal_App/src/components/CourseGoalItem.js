import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CourseGoalItem = ({ goalItem, id, setGoals }) => {
  const deleteGoalHandler = () => {
    setGoals((curr) => curr.filter(goal => goal.id !== id))
  };
  return (
    // Dynamically adjust the styling
    <Pressable onPress={deleteGoalHandler} style={ ({pressed}) => [styles.goalListItem , pressed && styles.pressedItem] }>
      <View >
        <Text style={styles.goalListItemText}>{goalItem.text}</Text>
      </View>
    </Pressable>
  );
};

export default CourseGoalItem;

const styles = StyleSheet.create({
  goalListItem: {
    backgroundColor: "#e4eaf5",
    width: "100%",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },

  goalListItemText: {
    fontSize: 20,
    fontWeight: 400,
  },

  pressedItem: {
    backgroundColor: "#c8cfec",
  }
});
