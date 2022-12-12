import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { CustomText } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.spacing.lg};
`;

const AvatarIcon = styled(Avatar.Icon)`
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Spacer />
      <AvatarContainer>
        <AvatarIcon size={150} icon="account-box-outline" />
        <Spacer />
        <CustomText variant="label">{user.email}</CustomText>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={(props) => (
            <List.Icon {...props} icon="account-heart-outline" />
          )}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => (
            <List.Icon {...props} icon="account-arrow-left-outline" />
          )}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SafeArea>
  );
};
