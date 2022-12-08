import { SvgXml } from "react-native-svg";

import { Favorite } from "../../../components/favorites/favorites.component";
import { CustomText } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpen,
    isClosedTemporarily,
    rating = 4,
    place_id,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favorite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Rating>
          {ratingArray.map((_, i) => (
            <SvgXml
              key={`star-${place_id}-${i}`}
              xml={star}
              width={20}
              height={20}
            />
          ))}
        </Rating>
        <Section>
          <CustomText variant="label">{name} </CustomText>
          <SectionEnd>
            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </Section>

        <Section>
          <CustomText>{address}</CustomText>
          <SectionEnd>
            {isOpen && !isClosedTemporarily && (
              <SvgXml xml={open} width={20} height={20} />
            )}
            {isClosedTemporarily && !isOpen && (
              <CustomText variant="error">CLOSED TEMPORARILY</CustomText>
            )}
          </SectionEnd>
        </Section>
      </Info>
    </RestaurantCard>
  );
};
