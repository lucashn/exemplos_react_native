import { Pressable, Text, StyleSheet } from 'react-native';

export default function Item(props) {
    return (
        <Pressable style={styles.item} onLongPress={props.onLongPress}>
            <Text>{props.texto}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        backgroundColor: '#D4DEFF',
        padding: 20,
        borderRadius: 5,
        minHeight: 60
    }
});