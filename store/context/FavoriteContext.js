// Implementiamo la gestione dei pasti preferiti, tramite context api di react
import { createContext, useState } from "react";

// Definiamo lo stato che deve mantenere e delle callback per aggiornarlo
export const FavoritesContext = createContext({
    ids: [],
    addToFavorite: (id) => {}, 
    removeToFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {

    const [favoriteMealIds, setFavoriteMealIds] = useState([]); //manipolazione dello stato

    function addToFavorite(id) {
        setFavoriteMealIds((currentFavouriteMeals) => [...currentFavouriteMeals, id])
    }

    function removeToFavorite(id) {
        setFavoriteMealIds((currentFavouriteMeals) => currentFavouriteMeals.filter((itemId) => itemId !== id))
    }

    const favourite = {
        ids: favoriteMealIds,
        addToFavorite: addToFavorite,
        removeToFavorite: removeToFavorite,
    }

    return <FavoritesContext.Provider value={favourite}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;