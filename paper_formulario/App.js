import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Provider, Text, TextInput, Switch, Button } from 'react-native-paper'

export default function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [propaganda, setPropaganda] = useState(false)

  function mostrarDialogo() {
    alert("Conta criada com sucesso. Nome: " + nome + " E-mail: " + email)
  }

  return (
    <Provider>
      <View style={styles.container}>
        <Text style={styles.titulo}>Cadastro</Text>

        <TextInput
          style={styles.entradaTexto}
          label="Nome"
          value={nome}
          onChangeText={texto => setNome(texto)}
        />
        
        <TextInput
          style={styles.entradaTexto}
          label="E-mail"
          value={email}
          onChangeText={texto => setEmail(texto)}
        />
        
        <TextInput
          style={styles.entradaTexto}
          secureTextEntry={true}
          label="Senha"
          value={senha}
          onChangeText={texto => setSenha(texto)}
        />

        <View style={styles.linha}>
          <Text>Receber propagandas?</Text>
          <Switch
            value={propaganda}
            onValueChange={value => setPropaganda(value)}
          />
        </View>

        <Button style={styles.botao} mode="contained" onPress={mostrarDialogo}>Criar conta</Button>

      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  titulo: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 24
  },
  linha: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10
  },
  botao: {
    marginTop: 20
  },
  entradaTexto: {
    marginTop: 5,
    marginBottom: 5
  }
})
