import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import axios from 'axios'

export default function App() {
  const [gato, setGato] = useState({})
  // let imgUrl;

  // console.log("CONSOLE FORA DE UMA FUNÇÃO")

  // async function getGatinho(){}
  const requisicao = async () => {
    // const myPromise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     reject("Promise Resolvida com Sucesso!");
    //   }, 3000);
    // });

    // myPromise
    //   .then(response => console.log(response))
    //   .catch(erro => console.log("ERROR: ", erro))

    //EXIBIR A IMAGE DO GATINHO AO CLICAR NO BOTAO
    // fetch("https://api.thecatapi.com/v1/images/search")
    //   .then(resp => resp.json())
    //   .then(dados => {
    //     setGato(dados[0])
    //   })
    //   .catch(err => console.log(err))

    // try{
    //   const dados = await fetch("https://api.thecatapi.com/v1/images/search")
    //   const gatinho = await dados.json()
    // } catch(err) {
    //   console.log(err)
    // }
    // console.log("gatinho: ",gatinho[0].url)

    try {
      const {data} = await axios.get('https://api.thecatapi.com/v1/images/search')
      console.log("axios: ", data)
      setGato(data[0])
    } catch(err) {
    //   console.log(err)
    }
  }

  useEffect(() => {
    requisicao()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image source={{
        uri: gato?.url
      }}
        width={500}
        height={500}
      />
      <Text>ID: {gato?.id}</Text>
      <Button
        title='Iniciar Função de Teste'
        onPress={requisicao}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
