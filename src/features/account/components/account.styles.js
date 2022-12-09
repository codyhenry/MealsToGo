import styled from "styled-components/native";
import { Button } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const AccountCover = styled.View`
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.spacing.lg};
  margin-top: ${(props) => props.theme.spacing.sm};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.spacing.sm};
`;
