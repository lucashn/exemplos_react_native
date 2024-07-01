import { Text, Button, View, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'

export default function App() {
  const [contagem, setContagem] = useState(0)

  useEffect( () => {
    const id = setInterval( () => {
      setContagem(c => c + 1)
    }, 1000)

    alert("Iniciando contador")

    return () => { 
      clearInterval(id)
      alert("Limpando contador")      
    }
  }, [])

  return (
    <View>
      <Text>Contador: {contagem} tics</Text>
    </View>
  );
}
