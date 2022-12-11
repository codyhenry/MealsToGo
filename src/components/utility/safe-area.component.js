import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

//Any styled componenet automatically gets "theme" prop passed to it
export const SafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;
