import { View, TextInput, Text, StyleSheet } from 'react-native';
import Botao from '../componentes/Botao';
import { useState } from 'react';

export default function Adicionar({ navigation }) {
    const [textoTarefa, setTextoTarefa] = useState('');

    return (
        <View style={styles.tela}>
            <Text style={styles.titulo}>Tarefa:</Text>
            <TextInput
                style={styles.entrada} multiline={true} rows={10}
                textAlignVertical="top" onChangeText={setTextoTarefa} value={textoTarefa}/>

            <View style={styles.barraBotoes}>
                <Botao texto="Adicionar" onPress={() => {
                    navigation.navigate('Tarefas', {textoTarefa: textoTarefa})
                }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        padding: 20,
        gap: 10,
        backgroundColor: '#fff'
    },
    barraBotoes: {
        alignItems: 'flex-end'
    },
    titulo: {
        fontSize: 20
    },
    entrada: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
    }
});