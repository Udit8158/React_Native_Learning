import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <SafeAreaView>
      <StartGameScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
