import { SafeAreaView, StyleSheet } from 'react-native';
import { Text, TextInput, Button, Provider, DefaultTheme, Checkbox } from 'react-native-paper';

const tema = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: 'pink',
    accent: '#AA336A',
    background: '#B7E2F0'
  }
}

export default function App() {
  return (
    <Provider theme={tema}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Uso de temas</Text>
        <TextInput style={styles.item} placeholder="Nome"/>
        <TextInput style={styles.item} placeholder="Valor"/>

        <Checkbox status="checked"/>

        <Button style={styles.item} mode="contained">Enviar</Button>   
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  item: {
    margin: 5
  },
  titulo: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20
  }
});
