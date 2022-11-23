import React from "react";
import { ScrollView } from "react-native";

import { Accordion } from "../../../components/accordion/accordion.component";
import { RestaurantInfoCard } from "../components/restuarant-info-card.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Accordion />
      </ScrollView>
    </>
  );
};
