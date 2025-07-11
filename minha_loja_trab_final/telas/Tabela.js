import {View, ScrollView} from 'react-native';
import {DataTable} from 'react-native-paper'
import {useState, useEffect} from 'react'

export default function App({ navigation }) {
  const [produtos, setProdutos] = useState([])

  /**
  * Faz a requisição ao servidor de aplicação e retorna o atributo movies,
  * que vai ser uma lista de usuários
  */
  async function mostrarProduto() {
    try {
      const response = await fetch('https://lucashn.pythonanywhere.com/produto')
      const json = await response.json()
      return json
    } catch(error) {
      console.log(error)
    }
  }

  function mostrarDetalhes(id) {
    navigation.navigate("Detalhes", { "id": id })
  }

  /**
   * Quando a tela for carregada, ele chama o mostrarproduto e configura a variável
   */
  useEffect(()=> {
    mostrarProduto().then((produtos) => setProdutos(produtos))
  }, [])
  /**
   * Para cada usuário, mostra um <Text> contendo o seu id, nome e e-mail
   */
  return (
    <View>
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Nome</DataTable.Title>
            <DataTable.Title>Quantidade</DataTable.Title>
            <DataTable.Title>Preço</DataTable.Title>
          </DataTable.Header>

          {produtos.map((produto) => (
            <DataTable.Row key={produto.id} onPress={() => mostrarDetalhes(produto.id)}>
              <DataTable.Cell>{produto.nome}</DataTable.Cell>
              <DataTable.Cell>{produto.quantidade}</DataTable.Cell>
              <DataTable.Cell>{produto.preco}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
}