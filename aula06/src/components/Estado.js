import { useState } from 'react'
import { Text, View, Button } from 'react-native'

export const Estado = () => {
    const [estado, setEstado] = useState("Sou um Estado")

    const alterarTexto = () => {
        estado == "Sou um Estado" 
            ? setEstado("Eu sou outro estado") 
            : setEstado("Sou um Estado")

        // if (estado == "Sou um Estado") {
        //     setEstado("Eu sou outro estado")
        // } else {
        //     setEstado("Sou um Estado")
        // }
    }

    // const outroTexto = () => {
    //     setEstado("Sou um Estado")
    // }

    return (
        <View>
            <Text>COMPONENTE DE ESTADO</Text>
            <Text style={{ fontSize: 50 }}>{estado}</Text>
            <Button
                title="Clique Aqui"
                onPress={alterarTexto}
            />
            {/* <Button 
                    title="Clique Aqui"
                    onPress={outroTexto}
                /> */}
        </View>
    )
}