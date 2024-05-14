import 'react-native-gesture-handler';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import MyContextProvider from './src/context/my-context';
import ThemeContextProvider from './src/context/theme-context';
import AuthContextProvider from './src/context/auth-context';

export default function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <MyContextProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </MyContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  )
}
