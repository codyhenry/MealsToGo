import { useContext } from "react";
import styled from "styled-components/native";
import { Pressable } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { CustomText } from "../../../components/typography/text.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restuarant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { FavoritesContext } from "../../../services/favorites/favorites.context";

const NoFavoritesArea = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
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
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <CustomText variant="error">You do not have any favorites</CustomText>
    </NoFavoritesArea>
  );
};
