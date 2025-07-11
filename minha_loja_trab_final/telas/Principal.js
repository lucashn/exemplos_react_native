import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react'

const URL = "https://lucashn.pythonanywhere.com/produto"

export default function Principal({navigation}) {

  function mostrarTabela() {
    navigation.navigate('Tabela')
  }

  const [nome, setNome] = useState("")
  const [quantidade, setQuantidade] = useState("")
  const [preco, setPreco] = useState("")

  function enviarProduto() {
    const produto = JSON.stringify({
      "nome": nome,
      "quantidade": quantidade,
      "preco": preco
      })
      fetch(URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: produto
      })
      alert("Produto enviado!")
  }
  return (
    <View style={styles.container}>
      <Text>Cadastro de Produtos</Text>

      <TextInput placeholder="Nome" onChangeText={setNome} value={nome} style={styles.entrada}/>
      <TextInput placeholder="Quantidade" onChangeText={setQuantidade} value={quantidade} style={styles.entrada} keyboardType="numeric"/>
      <TextInput placeholder="Preço" onChangeText={setPreco} value={preco} style={styles.entradaBaixo} keyboardType="numeric"/>
      <Button title="Enviar" onPress={enviarProduto}/>
      <Text> </Text>
      <Button title="Mostrar Tabela" onPress={mostrarTabela}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  entrada: {
    borderWidth: 1,
    marginTop: 10,
    padding: 5
    },
  entradaBaixo: {
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
    marginBottom: 10
  }
});
