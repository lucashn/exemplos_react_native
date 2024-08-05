import { View, TextInput, Button, StyleSheet } from 'react-native'
import { useState } from 'react'

export default function Principal({ navigation }) {
  const [nome, setNome] = useState("")

  function proximo() {
    navigation.navigate("Confirmacao", {
      nome: nome
    })
  }

  return (
    <View style={styles.container}>
       <TextInput
        style={styles.entrada}
        onChangeText={setNome}
        value={nome}
        placeholder="Digite seu nome"
      />
      <Button title="Próximo" onPress={proximo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  entrada: {
    borderWidth: 1,
    padding: 10,
    margin: 10
  }
});