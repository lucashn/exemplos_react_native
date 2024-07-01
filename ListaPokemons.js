import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DADOS = [
  {
    id: '1',
    texto: 'Snorlax',
  },
  {
    id: '2',
    texto: 'Charmander',
  },
  {
    id: '3',
    texto: 'Kadabra',
  },
];

function Item({texto}) {
  return (
    <View style={styles.item}>
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
}

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Meus Pokemons Favoritos:
      </Text>

      <FlatList
        data={DADOS}
        renderItem={({ item }) => <Item texto={item.texto}/>}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  texto: {
    fontSize: 18,
  },
});

export default App;

