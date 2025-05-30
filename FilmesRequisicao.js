import { View } from 'react-native'
import { DataTable } from 'react-native-paper'
import { useState, useEffect } from 'react'

export default function App() {
  const [filmes, setFilmes] = useState([])
  
  /**
   * Faz uma requisição ao servidor de aplicação e retorna o atributo movies,
   * que vai ser uma lista de filmes
   */
  async function lerFilmes() {
    try {
      const response = await fetch('https://reactnative.dev/movies.json')
      const json = await response.json()
      return json.movies
    } catch(error) {
      console.log(error)
    }
  }

  /**
   * Quando a tela for carregada, ele chama o lerFilmes e configura a variável
   */
  useEffect(() => {
    lerFilmes().then((filmes) => setFilmes(filmes))
  }, [])

  return (
    <View>
      
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nome</DataTable.Title>
          <DataTable.Title>Data</DataTable.Title>
        </DataTable.Header>

        {filmes.map((filme) => (
          <DataTable.Row key={filme.id}>
            <DataTable.Cell>{filme.title}</DataTable.Cell>
            <DataTable.Cell>{filme.releaseYear}</DataTable.Cell>
          </DataTable.Row>
        ))}

      </DataTable>
    </View>
  );
}