import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { getAllTasks, storeTask } from './src/services/todoServices';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import MyContextProvider from './src/context/my-context';
import ThemeContextProvider from './src/context/theme-context';

export default function App() {
  return (
    <ThemeContextProvider>
      <MyContextProvider>
        <NavigationContainer>
          <Routes/>    
        </NavigationContainer>
      </MyContextProvider>
    </ThemeContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
