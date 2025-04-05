import { SafeAreaView, StyleSheet, Text, Button, Image } from 'react-native'

import { useState } from 'react'

export default function App() {
  const [qtA, setQtA] = useState(0) // A = Xburguer
  const [qtB, setQtB] = useState(0) // B = Fanta
  const [qtC, setQtC] = useState(0) // C = Batata
  const total = qtA * 15 + qtB * 5 + qtC * 8

  return <SafeAreaView style={styles.container}>
    <Text style={styles.titulo}>GardenMóvel</Text>
    
    <Button
      title="+1 Xburguer"
      onPress={() => setQtA(qtA + 1)}>
    </Button>

    <Button
      title="+1 Fanta"
      onPress={() => setQtB(qtB + 1)}>
    </Button>
    
    <Button
      title="+1 Batata"
      onPress={() => setQtC(qtC + 1)}>>
    </Button>

    <Text style={styles.item}>Xburguer (R$ 15,00): x {qtA}</Text>
    <Text style={styles.item}>Fanta (R$ 5,00): x {qtB}</Text>
    <Text style={styles.item}>Batata (R$ 8,00): x {qtC}</Text>
    <Text style={styles.total}>Total: R$ {total} </Text>

  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 30
  },
  item: {
    margin: 5
  },
  total: {
    margin: 5,
    fontWeight: 'bold'
  }
});
