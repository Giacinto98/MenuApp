import { Children } from "react";
import { View, Text, StyleSheet } from "react-native";
function Subtitle ({ children }){
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{ children }</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white',
        margin: 5,
    },
    subtitleContainer: {
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        margin: 10
    }
})