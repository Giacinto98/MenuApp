import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverviewScreen from './screens/MealOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavouriteScreen from './screens/FavouriteScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/FavoriteContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
  <Tab.Navigator 
    screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      tabBarStyle: { 
        backgroundColor: '#351401',
      },
      tabBarActiveTintColor: 'white',
      headerTintColor: 'white', }}
      >
      <Tab.Screen 
        name="Favourites" 
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} /> // Imposta l'icona per il tab "Settings"
          ),
        }}/>
      <Tab.Screen 
        name="All Categories" 
        component={StackNavigator} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant" color={color} size={size} /> // Imposta l'icona per il tab "Settings"
          ),
        }}/>
  </Tab.Navigator>
  );
}


function StackNavigator() {
return (
<Stack.Navigator 
  screenOptions={{
  headerStyle: { backgroundColor: '#351401' },
  headerTintColor: 'white',
  contentStyle: { backgroundColor: '#3f2f25' }}}>

  <Stack.Screen name="MealsCategories" 
    component={CategoriesScreen} 
    options={{
    title: 'All Categories'}} />

  <Stack.Screen name="MealsOverview" 
    component={MealOverviewScreen} />

  <Stack.Screen name="MealsDetail" 
    component={MealDetailScreen} />

</Stack.Navigator>
);
}


export default function App() {
  return (
    <>
      <StatusBar style='light' />
        <FavoritesContextProvider>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  prova: { }
});