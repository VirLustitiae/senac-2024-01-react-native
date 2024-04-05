import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Exe1 } from './src/componets/Exe1';
import { Exe2 } from './src/componets/Exe2';
import { Exe3 } from './src/componets/Exe3';
import { Exe4 } from './src/componets/Exe4';
import { Exe5 } from './src/componets/Exe5';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Exe1 /> */}
      {/* <Exe2 /> */}
      {/* <Exe3 /> */}
      {/* <Exe4 /> */}
      <Exe5 />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
