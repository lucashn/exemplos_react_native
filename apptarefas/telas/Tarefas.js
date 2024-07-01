import { View, FlatList, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Item from '../componentes/Item';
import BotaoRedondo from '../componentes/BotaoRedondo';

export default function Tarefas({route, navigation }) {
    const [listaTarefas, setListaTarefas] = useState([]);

    function atualizarTarefas(novasTarefas) {
        setListaTarefas(novasTarefas);
        AsyncStorage.setItem('tarefas', JSON.stringify(novasTarefas));
    }

    function adicionarTarefa() {
        const novasTarefas = [...listaTarefas, route.params.textoTarefa];
        atualizarTarefas(novasTarefas);
    }

    function removerTarefa(indexARemover) {
        atualizarTarefas(listaTarefas.filter((_, index) => index != indexARemover))
    }

    // persistência de dados
    useEffect(() =>  {
        async function carregarTarefas() {
            const tarefasJSON = await AsyncStorage.getItem('tarefas');
            if(tarefasJSON) {
                setListaTarefas(JSON.parse(tarefasJSON));
            }
        }

        carregarTarefas();
    }, []);

    // Retorno do diálogo de adição de tarefas
    useEffect(() => {
        if (route.params?.textoTarefa) {
            adicionarTarefa(route.params.textoTarefa);
        }
    }, [route.params]);

    return (
        <View style={styles.tela}>
            <FlatList style={styles.lista}
                data={listaTarefas}
                renderItem={({ item, index }) => <Item texto={item} onLongPress={() => removerTarefa(index)}/>}
                keyExtractor={(_, index) => 'chave' + index}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            />

            <View style={styles.barraBotoes}>
                <BotaoRedondo onPress={() => navigation.navigate('Adicionar')} />
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
    }
});