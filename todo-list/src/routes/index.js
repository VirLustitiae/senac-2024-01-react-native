import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AllTasks from '../screens/AllTasks'
import NewTask from '../screens/NewTask'

const {Navigator, Screen}  = createBottomTabNavigator()

export default function Routes() {
    return (
        <Navigator>
            <Screen name="alltasks" component={AllTasks} />
            <Screen name='newtask' component={NewTask} />
        </Navigator>
    )
}