import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTitle.js';
import { FlatList, View } from 'react-native';


function CategoriesScreen({ navigation }) { /* oggetto ricevuto da ogni schermata della navigazione */

    function renderCategoryItem(itemData) {
        return ( 
        <CategoryGridTitle 
            title={itemData.item.title} 
            color={itemData.item.color} 
            onPress={() => pressHandler(itemData)}/>
        );
    }

    function pressHandler(itemData) {
        navigation.navigate('MealsOverview', { categoryId: itemData.item.id });
    }
    
    return (
        <View>
            <FlatList
             data={CATEGORIES} 
             keyExtractor={(item) => item.id} 
             renderItem={renderCategoryItem}
             numColumns={2}
            />
        </View>
    );
}

export default CategoriesScreen;