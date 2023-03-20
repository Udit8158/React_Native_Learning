import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// Form Validation By Yup
import {object, number} from 'yup';
import CustomButton from './components/CustomButton';
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
    // console.warn(lowercase, uppercase, numbers, symbols)
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
      
      // console.warn(paswdChars)
      let paswd = '';

      // generating the actual password
      for (let i = 0; i < passwordLength; i++) {
        // console.warn(i)
        paswd +=
          paswdChars[i];
      }

      // setting password
      // console.warn(paswd);
      setPassword(paswd)
    } else {
      console.warn("Select correct numbers")
    }
  };

  const resetPassword = () => {
    // Reset passwords

    setPassword('');
    setPasswordLength(0);
    setLowercase(0);
    setUppercase(0);
    setSymbols(0);
    setNumbers(0);
    setIsPasswordGenerated(false);
  };



  return (
    <SafeAreaView>
      <Text style={styles.headerText}>GENERATE YOUR CUSTOMIZED PASSWORD</Text>
      {/* Password Container */}
      <View style={styles.passwordContainer}>
        {/* Password Length */}
        <View style={styles.passwordInfoContainer}>
          <Text style={styles.passwordContainerText}>Password length</Text>
          <TextInput
            style={styles.passwordContainerInput}
            value={passwordLength.toString()}
            keyboardType="numeric"
            onChangeText={passwdlen => setPasswordLength(Number(passwdlen))}
          />
        </View>

        {/* Password Uppercase Char */}
        <View style={styles.passwordInfoContainer}>
          <Text style={styles.passwordContainerText}>
            Number of uppercase character
          </Text>
          <TextInput
            style={styles.passwordContainerInput}
            value={uppercase.toString()}
            keyboardType="numeric"
            onChangeText={upperlen => setUppercase(Number(upperlen))}
          />
        </View>

        {/* Password Lowercase Char */}
        <View style={styles.passwordInfoContainer}>
          <Text style={styles.passwordContainerText}>
            Number of lowercase character
          </Text>
          <TextInput
            style={styles.passwordContainerInput}
            value={lowercase.toString()}
            keyboardType="numeric"
            onChangeText={lowerlen => setLowercase(Number(lowerlen))}
          />
        </View>

        {/* Password Numeric Char */}
        <View style={styles.passwordInfoContainer}>
          <Text style={styles.passwordContainerText}>
            Number of numeric character
          </Text>
          <TextInput
            style={styles.passwordContainerInput}
            value={numbers.toString()}
            keyboardType="numeric"
            onChangeText={numlen => setNumbers(Number(numlen))}
          />
        </View>

        {/* Password Symbolic Char */}
        <View style={styles.passwordInfoContainer}>
          <Text style={styles.passwordContainerText}>
            Number of symbolic character
          </Text>
          <TextInput
            style={styles.passwordContainerInput}
            value={symbols.toString()}
            keyboardType="numeric"
            onChangeText={symlen => setSymbols(Number(symlen))}
          />
        </View>
      </View>

      {/* Generate Password Btn */}
     <CustomButton text={'Generate Password'} btnFunc={() => generatePassword()}/>
        {/* Result Password Container */}
        {(isPasswordGenerated && <View style={styles.passwordResultContainer}>
          <Text style={styles.passwordResultText}>Your Password</Text>
          <Text style={styles.passwordText}>{password}</Text>
          <CustomButton text={'Reset Password'} btnFunc={() => resetPassword()}/>
        </View>)}

      {/* Reset Password Btn */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 800,
    textAlign: 'center',
  },
  passwordContainer: {
    display: 'flex',
    marginTop: 40,
    gap: 10,
    paddingHorizontal: 20,
  },
  passwordInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  passwordContainerText: {
    fontSize: 17,
    fontWeight: 500,
  },
  passwordContainerInput: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  passwordResultContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: "#d5ecf0",
   marginHorizontal: 40,
   borderRadius: 20,
   paddingVertical: 20
  },
  passwordResultText: {
    fontSize: 20,
    fontWeight: 600,
  },
  passwordText: {
    fontSize: 20,
    fontWeight: 300,
    marginTop: 20
  },
});

export default App;
