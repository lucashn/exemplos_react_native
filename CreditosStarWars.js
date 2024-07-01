import { Text, View, StyleSheet, Button, TextInput, Image } from 'react-native'
import { useState } from 'react'

let rebel = require("./assets/rebel.jpeg")

export default function App() {
  const [saldo, setSaldo] = useState(0)
  const [valorOperacao, setValorOperacao] = useState("")

  function creditar() {
    let val = parseFloat(valorOperacao)
    setSaldo(saldo + val)
  }

  function debitar() {
    let val = parseFloat(valorOperacao)
    
    if(saldo - val >= 0)
      setSaldo(saldo - val)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Banco da República
      </Text>

      <View>
        <Text>Saldo: {saldo}</Text>
      </View>

      <TextInput style={styles.entrada}
        onChangeText={setValorOperacao}
        value={valorOperacao}
        placeholder="Valor da operação"
      />

      <View style={styles.quadroBotoes}>
        <Button title="Creditar" onPress={creditar}/>
        <Button title="Debitar" onPress={debitar}/>
      </View>

      <Image source={rebel} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  titulo: {
    textAlign: "center",
    fontSize: 20,
    paddingBottom: 30
  },
  entrada: {
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 2
  },
  quadroBotoes: {
    flexDirection: "row",
    justifyContent: "center"
  },
  logo: {
    marginTop: 30,
    height: 50,
    resizeMode: "contain"
  }
});

