import { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
export const FavoritesContext = createContext();
export const FavoritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favorites, setFavorites] = useState([]);

  const saveFavorites = async (data, uid) => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
      //console.log(jsonValue);
    } catch (err) {
      //console.log(err);
    }
  };

  const loadFavorites = async (uid) => {
    try {
      const data = await AsyncStorage.getItem(`@favorites-${uid}`);
      if (data !== null) {
        setFavorites(JSON.parse(data));
      }
    } catch (err) {
      //console.log(err);
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
    if (user) {
      loadFavorites(user.uid);
    }
  }, [user]);

  //save favorites after each change
  useEffect(() => {
    if (user) {
      saveFavorites(favorites, user.uid);
    }
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites: add, removeFromFavorites: remove }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
