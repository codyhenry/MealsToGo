import styled from "styled-components/native";

import { Button, TextInput, ActivityIndicator } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;
export const AccountCover = styled.ScrollView`
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

export const AuthInput = styled(TextInput).attrs((props) => ({
  mode: "outlined",
  activeOutlineColor: colors.brand.primary,
  clearButtonMode: "while-editing",
  autoCapitalize: "none",
  right: <TextInput.Icon icon={props.icon} />,
}))`
  width: 300px;
`;

export const AuthInputFunction = styled(TextInput).attrs((props) => ({
  mode: "outlined",
  activeOutlineColor: colors.brand.primary,
  clearButtonMode: "while-editing",
  autoCapitalize: "none",
  right: <TextInput.Icon icon={props.icon} onPress={props.function} />,
}))`
  width: 300px;
`;

export const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h4};
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs({
  animating: true,
  color: colors.brand.primary,
})``;
