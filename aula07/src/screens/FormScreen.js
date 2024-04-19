import { useState } from 'react'
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'

export default function FormScreen() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [celular, setCelular] = useState("")

    const handleForm = () => {
        
        const contato = {
            nome: nome,
            email: email,
            celular: celular
        }

        // console.log(contato.nome)
        // console.log(contato.email)
        // console.log(contato.celular)

        // Alert.alert('Formulário', contato)
        console.log(contato)
    }

    return (
        <View>
            <Text>FORM SCREEN FUNCIONOU</Text>

            <TextInput
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={setNome}
                style={styles.input}
            />

            <TextInput
                placeholder='Digite seu email'
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
            />

            <TextInput
                placeholder='Digite seu WhatsApp'
                value={celular}
                onChangeText={setCelular}
                style={styles.input}
                keyboardType="number-pad"
            />

            <Button title='CADASTRAR' onPress={handleForm} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: "gray",
        borderWidth: 1,
        padding: 5
    }
})