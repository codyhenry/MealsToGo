import React, { useContext, useState } from "react";
import { Pressable } from "react-native";

import { Search } from "../components/search.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FadeInView } from "../../../components/animations/fade.animation";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restuarant-info-card.component";
import { LoadingComponent } from "../../../components/loading/activity-indicator.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";
import { RestaurantList } from "../components/restaurant-list.styles";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";

//navigate prop comes from stack navigator
export const RestaurantsScreen = ({ navigation }) => {
  //const restaurantContext = useContext(RestaurantsContext);
  //destructure restaurantContext parameters passed in RestaurantContextProvider
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);

  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <>
              <Pressable
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
              >
                <Spacer side="bottom" size="md">
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
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
