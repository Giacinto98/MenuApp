import { FlatList, View } from "react-native";
import MealItem from "./MealItem";

function MealList({ items }) {

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
             data={items}
             keyExtractor={(item) => item.id}
             renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealList;