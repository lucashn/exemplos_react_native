import { Pressable, Text, StyleSheet } from 'react-native';

export default function Botao(props) {
    return (
        <Pressable style={styles.botao} onPress={props.onPress}>
            <Text>{props.texto}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#D9D9D9',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});