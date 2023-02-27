/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// Form Validation By Yup
import {object, number} from 'yup';

const PasswordValidation = object({
  passwordLength: number()
    .min(4, 'Password length must be at least 4')
    .max(16, 'Password length must be at most 16')
    .required('Passsword length is required'),
});

// state
const [password, setPassword] = useState('');
const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

const [lowercase, setLowercase] = useState(false);
const [uppercase, setUppercase] = useState(false);
const [numbers, setNumbers] = useState(false);
const [symbols, setSymbols] = useState(false);

// Functions
const generatePassword = (passwordLength: number) => {};
const createPassword = (characters: string, passwordLength: number) => {};
const resetPassword = () => {};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text>Hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
