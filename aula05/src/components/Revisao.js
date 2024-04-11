import { useState } from 'react'
import { Text, TextInput, StyleSheet, Button } from 'react-native'

const Revisao = ({ desestruturacao, outraProp }) => {
    const [tarefa, setTarefa] = useState("")
    const [listaTarefa, setListaTarefa] = useState(["Tarefa 1"])

    // const lista = ["Estudar React Native", "Estudar React", "Estudar Java"]

    const addTarefa = () => {
        console.log(tarefa)
        setListaTarefa([...listaTarefa, tarefa])
    }
    
    return (
        <>
            <Text>REVISAO</Text>
            <Text>{desestruturacao}</Text>
            <Text>{outraProp}</Text>

            {/* {lista.map(tarefa => {
                return (
                    <Text>{tarefa}</Text>
                )

            })} */}

            <TextInput 
                placeholder='Digite aqui' 
                style={styles.input}
                value={tarefa}
                onChangeText={setTarefa}
            />

            <Button title='Adicionar Tarefa' onPress={addTarefa}/>


            {listaTarefa.map(tarefa => <Text>{tarefa}</Text>)}


        </>
    )
}

export default Revisao


const styles = StyleSheet.create({
    input: {
        width: "80%",
        borderColor: 'black',
        borderWidth: 1
    }
})