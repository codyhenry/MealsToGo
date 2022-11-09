import styled from "styled-components/native";
import { Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.spacing.md};
`;

const RestaurantTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Rating = styled.View`
  flex-direction: row;
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
`;

const ClosedMessage = styled(Address)`
  color: ${(props) => props.theme.colors.ui.error};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpen = true,
    isClosedTemporarily = false,
    rating = 4,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Rating>
          {ratingArray.map((e, i) => (
            <SvgXml key={i} xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Section>
          <RestaurantTitle>{name} </RestaurantTitle>
          <SectionEnd>
            <Image style={{ width: 20, height: 20 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>

        <Section>
          <Address>{address}</Address>
          <SectionEnd>
            {isOpen && !isClosedTemporarily && (
              <SvgXml xml={open} width={20} height={20} />
            )}
            {isClosedTemporarily && !isOpen && (
              <ClosedMessage>CLOSED TEMPORARILY</ClosedMessage>
            )}
          </SectionEnd>
        </Section>
      </Info>
    </RestaurantCard>
  );
};
