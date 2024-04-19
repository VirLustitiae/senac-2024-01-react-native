import { NavigationContainer } from '@react-navigation/native'
import Tab from './bottom-tabs.routes'
import Drawer from './drawer.routes'
import Stack from './stack.routes'

export default function Rotas() {
    return(
        <NavigationContainer>
            {/* <Stack /> */}
            {/* <Tab /> */}
            <Drawer />
        </NavigationContainer>
    )
}