import { View, StyleSheet, Pressable, Image } from 'react-native';

const logo = require("../assets/logo.png")

export default function Principal({ navigation }) {
  function navegar() {
    navigation.navigate('Queijo')
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        Queijos e cia
      </View>

      <Image source={logo}/>

      <Pressable style={styles.botao} onPress={navegar}>
        Navegar
      </Pressable>
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

  botao: {
    margin: 100,
    backgroundColor: "#CCCCCC",
    fontSize: 20,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30
  }
});
