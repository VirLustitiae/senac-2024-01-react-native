import { Text, Button, View } from "react-native";
import { deleteTask, storeTask, updateTasks } from "../services/todoServices";

export default function NewTask() {
    return (
        <View>
            <Text>NEW TASK</Text>
            <Button 
                title="deletar"
                onPress={deleteTask}
            />
            <Button 
                title="POST"
                onPress={() => storeTask({
                    title: "Estudar React Native",
                    description: "Alguma descrição",
                    priority: "alta"
                })}
            />
                        <Button 
                title="UPDATE"
                onPress={updateTasks}
            />
        </View>
    )
}