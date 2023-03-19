import { createContext } from "react";
import { useState } from "react";

export const FavoritesContext = createContext({});

function FavoritesContextProvider({ children }) {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  function addFavoriteMeal(id) {
    setFavoriteMeals((currentMeals) => [...currentMeals, id]);
  }

  function removeFavoriteMeal(id) {
    setFavoriteMeals((currentMeals) =>
      currentMeals.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMeals,
    addFavoriteMeal: addFavoriteMeal,
    removeFavoriteMeal: removeFavoriteMeal,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
