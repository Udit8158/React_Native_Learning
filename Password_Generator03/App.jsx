import React, {useState} from 'react';
import {
  Dimensions,
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
import {
  lowerCaseChars,
  numericChars,
  symbolicChars,
  upperCaseChars,
} from './src/data/characters';

const PasswordValidation = object({
  passwordLength: number()
    .min(4, 'Password length must be at least 4')
    .max(16, 'Password length must be at most 16')
    .required('Passsword length is required'),
});

function App() {
  // state
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [passwordLength, setPasswordLength] = useState(10);

  const [lowercase, setLowercase] = useState(4);
  const [uppercase, setUppercase] = useState(2);
  const [numbers, setNumbers] = useState(3);
  const [symbols, setSymbols] = useState(1);

  // Functions
  const generatePassword = () => {
    if (lowercase + uppercase + numbers + symbols === passwordLength) {
      setIsPasswordGenerated(true);
      let paswdChars = [];

      // selected characters
      for (let i = 0; i < lowercase; i++) {
        paswdChars.push(
          lowerCaseChars[
            Math.round(Math.random() * (lowerCaseChars.length - 1))
          ],
        );
      }
      for (let i = 0; i < uppercase; i++) {
        paswdChars.push(
          upperCaseChars[
            Math.round(Math.random() * (upperCaseChars.length - 1))
          ],
        );
      }
      for (let i = 0; i < numbers; i++) {
        paswdChars.push(
          numericChars[Math.round(Math.random() * (numericChars.length - 1))],
        );
      }
      for (let i = 0; i < symbols; i++) {
        paswdChars.push(
          symbolicChars[Math.round(Math.random() * (symbolicChars.length - 1))],
        );
      }

      // shuffeling the password characters
      paswdChars = paswdChars
        .map(value => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value);

      let paswd = '';

      // generating the actual password
      for (let i = 0; i < passwordLength; i++) {
        paswd +=
          paswdChars[Math.round(Math.random() * (paswdChars.length - 1))];
      }

      // setting password
      return paswd;
    }
  };

  const createPassword = () => {
    const paswd = generatePassword();
    setPassword(paswd);
  };
  // createPassword();
  const resetPassword = () => {
    setPassword('');
    setPasswordLength(0);
    setLowercase(0);
    setUppercase(0);
    setSymbols(0);
    setNumbers(0);
    setIsPasswordGenerated(false);
  };

  const backgroundStyle = {
    backgroundColor: Colors.darker,
    height: Dimensions.get('screen').height, // set full height
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>Hello </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
