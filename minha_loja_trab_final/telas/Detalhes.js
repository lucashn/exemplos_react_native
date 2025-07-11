import { Text, View, StyleSheet, Button } from 'react-native';
import { useState, useEffect } from 'react';

export default function Detalhes({ route, navigation }) {
  const [produto, setProduto] = useState({
    id: "",
    nome: "",
    quantidade: "",
    preco: "",
  });

  // carregar os dados do backend
  useEffect(() => {
    async function carregarProduto() {
      try {
        const response = await fetch(
          'https://lucashn.pythonanywhere.com/produto/' + route.params.id
        );
        const json = await response.json();
        setProduto(json)
      } catch (error) {
        console.log(error);
      }
    }

    carregarProduto();
  });

  return (
    <View>
      <Text>Detalhes do produto</Text>

      <Text>ID: {produto.id}</Text>
      <Text>Nome: {produto.nome}</Text>
      <Text>Quantidade: {produto.quantidade}</Text>
      <Text>Preço: {produto.preco}</Text>

      <Button title="Editar" />
      <Button title="Remover" />
    </View>
  );
}
