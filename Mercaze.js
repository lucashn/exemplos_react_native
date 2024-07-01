import { FlatList, Text, View, StyleSheet } from 'react-native';

const PRODUTOS = [
  { id: 1, nome: 'Arroz (5 Kg)', preco: 26 },
  { id: 2, nome: 'Amaciante', preco: 17 },
  { id: 3, nome: 'Cereal Moça Flakes', preco: 15 },
  { id: 4, nome: 'Passatempo', preco: 3 },
  { id: 5, nome: 'Maguary', preco: 12 },
  { id: 6, nome: 'Macarrão (500g)', preco: 6 },
  { id: 7, nome: 'Chinelo Havaianas', preco: 30 },
  { id: 8, nome: 'Bacon (1 Kg)', preco: 25 },
  { id: 9, nome: 'Maracujá (1 Kg)', preco: 9 },
  { id: 10, nome: 'Melancia (1 Kg)', preco: 4 },
];

function Produto({ nome, preco }) {
  return (
    <View style={styles.produto}>
      <Text>
        {nome} - R$ {preco},00
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Mercazé</Text>
      </View>

      <FlatList
        data={PRODUTOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Produto nome={item.nome} preco={item.preco} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9DD8F2',
  },
  produto: {
    backgroundColor: '#FFB5C9',
    padding: 20,
    margin: 10,
  },
});

