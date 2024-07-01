import { Text, Button, View, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'

export default function App() {
  const [contagem, setContagem] = useState(0)

  useEffect( () => {
    if(contagem != 0) {
      alert("A contagem mudou!")
    }
  }, [contagem])

  return (
    <View>
      <Text>Clicou {contagem} vezes</Text>
      <Button title="Clicar" onPress={ () => setContagem(contagem + 1) } />
    </View>
  );
}
