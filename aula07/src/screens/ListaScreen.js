import { View, Text, Image, ScrollView } from "react-native";
import { gatinhos } from "../data/gatinhos";

export default function ListaScreen() {
    // const testes = () => {
    //     gatinhos.forEach(gatinho => {
    //         console.log(gatinho.url)
    //     })
    // }
    return (
        <ScrollView>
            <Text>LISTA SCREEN</Text>
            {/* {gatinhos.map(item => {
                return (
                    <View key={item.id}>
                        <Text>{item.url}</Text>
                    </View>
                )
            })} */}
            {gatinhos.map(item => (
                <View key={item.id}>
                    <Image
                        width={200}
                        height={200}
                        source={{
                            uri: item.url
                        }} />
                    <Text>{item.url}</Text>
                </View>
            )
            )}
        </ScrollView>
    )
}