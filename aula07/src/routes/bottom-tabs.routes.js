import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import ListaScreen from '../screens/ListaScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { FontAwesome } from '@expo/vector-icons';


const { Navigator, Screen } = createBottomTabNavigator()

export default function Tab() {
    return(
        <Navigator>
            <Screen 
                name="home" 
                component={HomeScreen}
                options={{
                    title: "Início",
                    tabBarIcon: ({size, color}) => (
                        <FontAwesome 
                        name="home" 
                        color={color}
                        size={size} 
                    />),
                }}
            />
            <Screen name="lista" component={ListaScreen}
                options={{
                    title: "Lista",
                    tabBarIcon: ({size, color}) => (
                        <FontAwesome 
                        name="list" 
                        color={color}
                        size={size} 
                    />),
                }}
            />
            <Screen name="profile" component={ProfileScreen} 
            options={{
                title: "Início",
                tabBarIcon: ({size, color}) => (
                    <FontAwesome 
                    name="user-secret" 
                    color={color}
                    size={size} 
                />),
            }}/>
        </Navigator>
    )
}