import { Pressable, Text, StyleSheet } from 'react-native';

export default function BotaoRedondo(props) {
    return (
        <Pressable style={styles.botao} onPress={props.onPress}>
            <Text>+</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#D9D9D9',
        borderRadius: 100,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});