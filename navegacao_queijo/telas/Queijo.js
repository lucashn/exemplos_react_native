import { View, StyleSheet, Pressable, Text, Image } from 'react-native';

const queijo = require("../assets/queijo.jpg")

export default function Principal({ navigation }) {
  function navegar() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Pressable onPress={navegar}>
          &lt; Queijos e cia
        </Pressable>
      </View>

      <Image source={queijo} style={styles.queijo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
  },

  cabecalho: {
    backgroundColor: "#CCCCCC",
    height: 60,
    width: "100%",
    lineHeight: 60,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 100
  },

  queijo: {
    width: 200,
    height: 200
  }
});
