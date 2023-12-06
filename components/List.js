import { StyleSheet, View, Text } from "react-native";

function List({ data }) {
    return data.map((item) => (
        <View key={item} style={styles.container}>
            <Text style={styles.item} key={item}>{item}</Text>
        </View>
    ))
}

export default List;


const styles = StyleSheet.create({
    item: {
        borderRadius: 5,
        fontSize: 15,
        fontWeight: 'bold'
    },
    container: {
        backgroundColor: '#e2b497',
        margin: 2, 
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
    }
});