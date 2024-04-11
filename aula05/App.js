import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Revisao from './src/components/Revisao'

export default function App() {
  return (
    <View style={styles.container}>
      <Revisao desestruturacao="Eu sou uma propriedade" outraProp="Outra Propriedade"/>
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
