import { Text, View, StyleSheet } from 'react-native'
import { DataTable } from 'react-native-paper'
import { useState } from 'react'

const DADOS = [
  {
    id: 1,
    nome: 'Tenis',
    valor: 50.45
  },
  {
    id: 2,
    nome: 'Camiseta',
    valor: 30.34
  },
  {
    id: 3,
    nome: 'Meia',
    valor: 5.3
  },
  {
    id: 4,
    nome: 'Calças',
    valor: 89.99
  } 
]

export default function App() {
  const [itens, setItens] = useState(DADOS);

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nome</DataTable.Title>
          <DataTable.Title numeric>Valor</DataTable.Title>
        </DataTable.Header>

        {itens.map((item) => (
          <DataTable.Row key={item.id}>
            <DataTable.Cell>{item.nome}</DataTable.Cell>
            <DataTable.Cell numeric>{item.valor}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>    
    </View>
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
