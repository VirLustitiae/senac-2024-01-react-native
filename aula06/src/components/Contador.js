// import { useState } from 'react'
import { Text, Button, View, StyleSheet } from "react-native"

export const Contador = ({ count, setCount }) => {
    // const [count, setCount] = useState(0) 

    const incrementar = () => {
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(prevState => prevState + 1)
        // setCount(prevState => prevState + 1)
        // setCount(prevState => prevState + 1)
        console.log("CONTADOR: ", count+1)
    }

    return(
        <View>
            <Text style={styles.count}>{count}</Text>
            <Button 
                title="INCREMENTAR"
                onPress={() => setCount(count+1)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    count: {
        fontSize: 200,
        textAlign: "center"
    }
})