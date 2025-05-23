import {
    Text,
    View,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Pressable,
} from 'react-native';

import { useState } from 'react'

const PRODUTOS_INICIAIS = [
    { id: 1, nome: 'Chapéu de Cowboy', preco: 50 },
    { id: 2, nome: 'Skate NV', preco: 150 },
    { id: 3, nome: 'Barbie Maromba', preco: 70 },
    { id: 4, nome: 'Panela de Arroz', preco: 35 }
];

function ItemLista({ item }) {
    return (
        <View style={styles.itemLista}>
            <Text style={styles.nomeItem}>{item.nome}</Text>
            <Text>R$ {item.preco}</Text>
        </View>
    );
}

export default function App() {
    const [produtos, setProdutos] = useState(PRODUTOS_INICIAIS)

    function inserirProduto() {
        setProdutos([...produtos, { id: produtos.length + 1, nome: 'Novo produto', preco: 500 }])
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Rafiner's Shop</Text>
            <FlatList
                style={styles.listaProdutos}
                data={produtos}
                keyExtractor={(item) => item.id}
                renderItem={ItemLista}
            />

            <Pressable style={styles.botaoInserir} onPress={inserirProduto}>
                <Text style={styles.central}>Novo produto</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    nomeItem: {
        fontWeight: 'bold'
    },
    listaProdutos: {
        flexGrow: 1,
        borderTopWidth: 1,
    },
    central: {
        textAlign: 'center',
    },
    botaoInserir: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        margin: 5,
    },
    titulo: {
        fontSize: '18pt',
        textAlign: 'center',
        padding: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    itemLista: {
        flexDirection: 'row',
        columnGap: 10,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        padding: 5,
    },
});
