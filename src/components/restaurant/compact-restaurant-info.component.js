import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";

import { CustomText } from "../typography/text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

//Android cant render the images on maps so use this instead
const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const InfoContainer = styled.View`
padding: ${(props) => props.theme.spacing.sm}
max-width:120px;
align-items:center;
`;

const isAndroid = Platform.OS === "Android";

export const CompactRestaurantInfo = ({ restaurant, isOnMap }) => {
  const Image = isAndroid && isOnMap ? CompactWebView : CompactImage;
  return (
    <InfoContainer>
      <Image source={{ uri: restaurant.photos[0] }} />
      <CustomText variant="caption">{restaurant.name}</CustomText>
    </InfoContainer>
  );
};
