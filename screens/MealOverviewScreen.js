import { FlatList, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
import MealList from "../components/MealList";

function MealOverviewScreen({ route, navigation }) { //route e navigation li otteniamo in automatico da componente padre a figlio
    
    const catId = route.params.categoryId; 

    // se queste operazioni non vengono inserite in un hook come useEffect o meglio useLayoutEffect verrà sempre visualizzato un warning
    // Permette di settare il titolo della navigazione così come lo si recupera dalle categorie
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((item) => item.id === catId).title;
        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation]);


    const displayMeals = MEALS.filter((item) => {
        return item.categoryIds.indexOf(catId) >= 0;
    })

    return <MealList items={displayMeals} />
}

export default MealOverviewScreen;