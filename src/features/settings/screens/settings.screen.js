import React, { useContext } from "react";
import { List } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <List.Section>
        <List.Item
          title="Favorites"
          description="View your favorites"
          left={(props) => (
            <List.Icon {...props} icon="account-heart-outline" />
          )}
          onPress={() => navigation.navigate("Favorites")}
        />
        <List.Item
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
