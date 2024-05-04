import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { getAllTasks } from "../services/todoServices";

export default function AllTasks() {
    const [allTasks, setAllTasks] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            console.log("USEEFFECT")
            const data = await getAllTasks()
            setAllTasks(data)
            console.log(data)
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