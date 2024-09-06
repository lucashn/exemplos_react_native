// npm install @react-native-picker/picker

import { Text, SafeAreaView, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'

export default function App() {
  const [categoria, setCategoria] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <Picker
        selectedValue={categoria}
        onValueChange={(valor, idx) =>
          setCategoria(valor)
        }>

        <Picker.Item label="Categoria 1" value="1" />
        <Picker.Item label="Categoria 2" value="2" />
        <Picker.Item label="Categoria 3" value="3" />
      </Picker>

      <Text>ID selecionado: {categoria}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});

