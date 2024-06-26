import { useEffect, useState, useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { AuthContext } from "../context/auth-context";
import { MyContext } from "../context/my-context";
import { ThemeContext } from '../context/theme-context'
import { getAllTasks } from "../services/todoServices";

export default function AllTasks() {
    const [allTasks, setAllTasks] = useState([]);
    const myCtx = useContext(MyContext);
    const themeCtx = useContext(ThemeContext)
    const authCtx = useContext(AuthContext)

    // console.log(myCtx)
    // console.log(themeCtx)

    useEffect(() => {
        const fetch = async () => {
            console.log("USEEFFECT: ", authCtx.token.length)
            const data = await getAllTasks(authCtx.token)
            console.log("DATAA: ",data)
            setAllTasks(data)
        }
        fetch();
    }, [])

    return (
        <View>
            <Text>ALL TASKS</Text>
            {/* {allTasks.map( item => <Text key={item.id}>{item.title}</Text>)} */}

            <FlatList 
                data={allTasks}
                keyExtractor={ item => item.id}
                renderItem={({item}) => (
                    <Text>{item.title}</Text>
                )}
            />

        </View>
    )
}