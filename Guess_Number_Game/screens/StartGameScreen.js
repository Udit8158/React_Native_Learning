import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/UI/CustomButton'

const StartGameScreen = () => {
  return (
    <View>
        <TextInput style={styles.numberInputField}/>
      <CustomButton btnText={'Chose number'} bgColor='blue'/>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    numberInputField: {
        height: 40,
        width: 200,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    }
})