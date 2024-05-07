import { useContext } from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import { ThemeContext } from "../context/theme-context";
import { deleteTask, storeTask, updateTasks } from "../services/todoServices";

export default function NewTask() {
    const { setDarkMode, setLightMode, isDark } = useContext(ThemeContext)

    return (
        <View style={[styles.container, isDark && styles.darkContainer]}>
            <Text style={[styles.text, isDark && styles.textDark]}>NEW TASK</Text>
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

            <Button
                title="DARK MODE"
                onPress={setDarkMode}
            />

            <Button
                title="LIGHT MODE"
                onPress={setLightMode}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    darkContainer: {
        backgroundColor: '#333'
    },
    text: {
        fontSize: 24,
        color: 'black'
    },
    textDark: {
        color: 'white'
    }
})