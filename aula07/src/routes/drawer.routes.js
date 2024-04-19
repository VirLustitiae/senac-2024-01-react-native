import { createDrawerNavigator } from "@react-navigation/drawer"
import FormScreen from "../screens/FormScreen"
import HomeScreen from "../screens/HomeScreen"
import ListaScreen from "../screens/ListaScreen"
import ProfileScreen from "../screens/ProfileScreen"

const { Navigator, Screen } = createDrawerNavigator()

export default function Drawer() {
    return(
        <Navigator>
            <Screen name="home" component={HomeScreen}/>
            <Screen name="lista" component={ListaScreen}/>
            <Screen name="profile" component={ProfileScreen}/>
            <Screen name='formulario' component={FormScreen} />
        </Navigator>
    )
}