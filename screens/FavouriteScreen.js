import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/FavoriteContext";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

function FavouriteScreen() {
    const favoriteMealContext = useContext(FavoritesContext); 
    const favouriteMeals = MEALS.filter(meal => favoriteMealContext.ids.includes(meal.id));

    return (
        <View style={styles.root}>
            <MealList items={favouriteMeals} />
        </View>
    );
}

export default FavouriteScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#3f2f25',
    }
})