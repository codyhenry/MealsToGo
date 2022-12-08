import styled from "styled-components/native";
import { ScrollView, Pressable } from "react-native";

import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { CustomText } from "../typography/text.component";

const FavoritesWrapper = styled.View`
  padding: ${(props) => props.theme.spacing.sm};
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <CustomText variant="label">Favorites:</CustomText>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer side="left" size="md" key={key}>
              <Pressable
                onPress={() => onNavigate("RestaurantDetail", { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </Pressable>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
