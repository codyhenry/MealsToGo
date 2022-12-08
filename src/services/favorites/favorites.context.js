import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesContext = createContext();
export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const saveFavorites = async (data) => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (err) {
      console.log(err);
    }
  };

  const loadFavorites = async () => {
    try {
      const data = await AsyncStorage.getItem("@favorites");
      if (data !== null) {
        setFavorites(JSON.parse(data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };
  const remove = (restaurant) => {
    //return false if the selected restaurant matches a restaurant in the list so we do not add it into the array
    const newFavorites = favorites.filter(
      (x) => x.place_id !== restaurant.place_id
    );
    setFavorites(newFavorites);
  };

  //only load favorites when screen mounts
  useEffect(() => {
    loadFavorites(favorites);
  }, []);

  //save favorites after each change
  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites: add, removeFromFavorites: remove }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
