import { useContext, useState } from 'react'
import { Text, View, StyleSheet, Button, Alert, ActivityIndicator } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { AuthContext } from '../context/auth-context'
import { login } from '../services/auth'

export default function Login(){
    const [email, setEmail] = useState("")
    const [passwd, setPasswd] = useState("")
    const [loading, setLoading] = useState(false)
    const authCtx = useContext(AuthContext)

    const handleLogin = async () => {
        try {
            setLoading(true)
            authCtx.signin(email, passwd)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: "center"}}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text>Página de Login</Text>
            <TextInput 
                style={styles.input}
                placeholder='DIGITE SEU EMAIL'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput 
                style={styles.input}
                placeholder='DIGITE SUA SENHA'
                secureTextEntry
                value={passwd}
                onChangeText={setPasswd}
            />

            <Button 
                title='ENTRAR NO SISTEMA'
                onPress={handleLogin}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#fff',
        padding: 8,
        width: "60%",
        marginBottom: 12
    }

})