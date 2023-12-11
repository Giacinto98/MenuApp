import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/FavoriteContext";


function MealDetailScreen({ route, navigation }) {

    const favoriteMealContext = useContext(FavoritesContext); //importiamo il context creato nella classe FavoriteContext.js
    const mealId = route.params.mealId; 
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const mealIsFavorite = favoriteMealContext.ids.includes(mealId); //impostiamo a true la variabile se questo elemento è stato già inserito nei preferiti

    function favoriteHandler() {
        if (mealIsFavorite) {
            favoriteMealContext.removeToFavorite(mealId);
        } else {
            favoriteMealContext.addToFavorite(mealId);
        }
    }

    // In fase di caricamento del layout viene eseguita la callback che mi renderizza un bottone
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} color="white" onPress={favoriteHandler}/>
            }
        })
    }, [navigation, favoriteHandler])

    return(
        <ScrollView style={styles.scrollStyle}>
            <View>
                <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image}/>
                <Text style={styles.title}>{selectedMeal.title}</Text>
                <MealDetails 
                    duration={selectedMeal.duration} 
                    affordability={selectedMeal.affordability} 
                    complexity={selectedMeal.complexity} 
                    textStyle={styles.detailText}
                />
                <View>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        overflow: 'hidden'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white',
        margin: 10
    },
    detailText: {
        color: 'white',
        fontWeight: 'bold',
    },
    scrollStyle: {
        marginBottom: 50 
    }
})