import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Provider, Text, TextInput, Switch, Button, Portal, Dialog } from 'react-native-paper'

export default function App() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [propaganda, setPropaganda] = useState(false)
  const [dialogoVisivel, setDialogoVisivel] = useState(false)

  function mostrarDialogo() {
    setDialogoVisivel(true)
  }

  function fecharDialogo() {
    setDialogoVisivel(false)
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

        <Portal>
          <Dialog visible={dialogoVisivel} onDismiss={fecharDialogo}>
            <Dialog.Title>Aviso</Dialog.Title>
            <Dialog.Content>
              <Text>{nome}, sua conta foi criada com sucesso! E-mail de confirmação enviado para {email}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={fecharDialogo}>Concluir</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
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

