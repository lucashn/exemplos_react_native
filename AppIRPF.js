import { Text, TextInput, Button, SafeAreaView, StyleSheet } from 'react-native'
import { useState } from 'react'

export default function App() {
  const [salario, setSalario] = useState("0")
  const [imposto, setImposto] = useState(0.0)

  function calculaIRPF() {
    let valor = parseFloat(salario)
    let novoImposto = valor * 0.1
    setImposto(novoImposto)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.entrada} placeholder="Salário" value={salario} onChangeText={setSalario} />
      <Button title="Calcular" onPress={calculaIRPF}/>
      <Text>Você vai pagar R$ {imposto} de imposto </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    gap: 10
  },
  entrada: {
    padding: 5,
    borderWidth: 1
  }
});

