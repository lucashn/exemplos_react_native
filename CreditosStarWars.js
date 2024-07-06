import { Text, View, StyleSheet, Button, TextInput, Image } from 'react-native'
import { useState } from 'react'

let rebel = require("./assets/rebel.jpeg")

export default function App() {
  const [saldo, setSaldo] = useState(0)
  const [valorOperacao, setValorOperacao] = useState("")

  const fmt = saldo.toFixed(2)

  function creditar() {
    let val = parseFloat(valorOperacao)
    if(isNaN(val) || val < 0) {
      alert("Favor digitar um número válido")
    } else {
      setSaldo(saldo + val)
    }
  }

  function debitar() {
    let val = parseFloat(valorOperacao)
    if(isNaN(val) || val < 0) {
      alert("Favor digitar um número válido")
    } else {
      setSaldo(saldo - val)
    }
  }

  function ajuda() {
    alert("Um Jedi foi enviado para te ajudar")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Banco da República
      </Text>

      <View>
        <Text>Saldo: {fmt}</Text>
      </View>

      <TextInput style={styles.entrada}
        onChangeText={setValorOperacao}
        value={valorOperacao}
        placeholder="Valor da operação"
      />

      <View style={styles.quadroBotoes}>
        <Button title="Creditar" onPress={creditar}/>
        <Button title="Debitar" onPress={debitar}/>
        <Button title="Ajuda Jedi" onPress={ajuda}/>
      </View>

      <Image source={rebel} style={styles.logo} />

      <View style={styles.rodape}>
        Banco da república
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rodape: {
    backgroundColor: "#0081f1",
    margin: 0,
    padding: 0,
    width: '100%',
    height: 40,
    marginTop: 50,
    color: "white",
    textAlign: "center",
    lineHeight: 40
  },
  container: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  titulo: {
    textAlign: "center",
    fontSize: 20,
    padding: 30
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

