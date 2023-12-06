import { FlatList, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

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

    function renderMealItem(itemData) {
        const mealItemProperties = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration
        }

        return <MealItem {...mealItemProperties} />
    }

    return (
        <View>
            <FlatList 
             data={displayMeals}
             keyExtractor={(item) => item.id}
             renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealOverviewScreen;