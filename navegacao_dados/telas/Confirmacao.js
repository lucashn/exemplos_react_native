import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native';

export default function Principal({ navigation }) {
  const route = useRoute()
  const nome = route.params.nome

  return (
    <View style={styles.container}>
      <Text>Resultado: {nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});