import { View, Text, Button, StyleSheet, Alert } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <FontAwesome 
                name="home" 
                size={84} 
                color="black" 
                backgroundColor="white"
                style={{borderRadius: 30}}
            />
            <Text style={styles.texto}>HomeScreen</Text>
            <Button 
                title='Ir para Perfil' 
                onPress={() => navigation.navigate('profile')}
            />
            <Button 
                title='Ir para Lista' 
                onPress={() => navigation.navigate('lista')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgray",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
    },
    texto: {
        fontSize: 50,
        fontWeight: 'bold'
    }
})