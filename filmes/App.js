import { Text, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [filmes, setFilmes] = useState([])
  
  async function lerFilmes() {
    try {
      const response = await fetch('https://reactnative.dev/movies.json')
      const json = await response.json()
      return json.movies
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    lerFilmes().then((filmes) => setFilmes(filmes))
  }, [])

  return (
    <View>
      {
        filmes.map(filme => {
          return <Text>{filme.title}</Text>
        })
      }
    </View>
  );
}