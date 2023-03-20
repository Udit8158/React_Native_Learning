import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomButton = ({text, btnFunc}) => {
  return (
    <TouchableOpacity style={styles.customBtn} onPress={btnFunc}>
      <Text style={styles.customBtnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customBtn: {
    backgroundColor: '#4c89e6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 20,
    marginHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customBtnText: {
    fontSize: 20,
    fontWeight: 400,
    color: '#fff',
  },
});
