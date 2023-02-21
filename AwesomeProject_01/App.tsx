import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
  useColorScheme,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('Hello World');

  // Dark mode
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <View
        style={[styles.container, !isDarkMode && {backgroundColor: 'white'}]}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          {text}
        </Text>
        <Button title="Click Me" onPress={() => setText('Change')}></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 100,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#fff',
    fontSize: 20,
  },
  darkText: {
    color: 'black',
    fontSize: 20,
  },
});

export default App;
