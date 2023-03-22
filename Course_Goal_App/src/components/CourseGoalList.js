import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CourseGoalItem from './CourseGoalItem'

const CourseGoalList = ({goalsData, setGoals}) => {
  return (
    <View style={styles.goalListContainer}>
          <Text style={styles.goalListTitle}>Your Course Goals</Text>
          <FlatList
            data={goalsData}
            renderItem={({ item }) => <CourseGoalItem goalItem={item} id={item.id} setGoals={setGoals}/>}
            keyExtractor={(item) => item.id}
          />
        </View>
  )
}

export default CourseGoalList

const styles = StyleSheet.create({
    goalListContainer: {
        flex: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
      },
      goalListTitle: {
        fontSize: 20,
        fontWeight: 600,
        textAlign: "center",
        marginBottom: 10,
      },
})