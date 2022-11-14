import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restuarant-info-card.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.spacing.sm};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  //const restaurantContext = useContext(RestaurantsContext);
  //destructure restaurantContext parameters passed in RestaurantContextProvider
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <>
            <Spacer side="bottom" size="md">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </>
        )}
        ListFooterComponent={<Spacer side="bottom" size="xxl" />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
