import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Contador } from './src/components/Contador';
import { Estado } from './src/components/Estado';
export default function App() {
  const [count, setCount] = useState(33)
  const increment = () => {

  }
  return (
    <View style={styles.container}>
      {/* <Estado /> */}
      <Contador count={count} setCount={setCount} />
      <Contador count={count} setCount={setCount} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
