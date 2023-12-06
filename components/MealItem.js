import { View, Text, Pressable, StyleSheet, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItem ({ id, title, imageUrl, duration, complexity, affordability }) {

    const navigation = useNavigation();

    function pressHandler() {
        navigation.navigate('MealsDetail', { mealId: id });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable 
             style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
             android_ripple={{ color: '#ccc' }}
             onPress={pressHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image 
                        source={{uri: imageUrl}} 
                        style={styles.image} 
                        />
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                    <MealDetails duration={duration} affordability={affordability} complexity={complexity} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        overflow: 'hidden'
    },
    buttonPressed: {
        opacity: 0.5,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },

})