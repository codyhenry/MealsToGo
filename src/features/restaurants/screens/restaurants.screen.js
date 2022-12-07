import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, Pressable } from "react-native";

import { Search } from "../components/search.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restuarant-info-card.component";
import { LoadingComponent } from "../../../components/loading/activity-indicator.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
//navigate prop comes from stack navigator
export const RestaurantsScreen = ({ navigation }) => {
  //const restaurantContext = useContext(RestaurantsContext);
  //destructure restaurantContext parameters passed in RestaurantContextProvider
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <>
              <Pressable
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              >
                <Spacer side="bottom" size="md">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </Pressable>
            </>
          )}
          ListFooterComponent={<Spacer side="bottom" size="xxl" />}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
