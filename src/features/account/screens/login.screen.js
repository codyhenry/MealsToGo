import { useState, useContext } from "react";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  AuthInputFunction,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomText } from "../../../components/typography/text.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Spacer size="xxl" />
      <Spacer size="xxl" />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          autocomplete="email"
          autoFocus="true"
          keyboardType="email-address"
          onChangeText={(email) => setEmail(email)}
          icon="email-outline"
        />
        <AuthInputFunction
          label="Password"
          value={password}
          textContextType="password"
          secureTextEntry={hidePassword}
          selectTextOnFocus={true}
          onChangeText={(password) => setPassword(password)}
          icon={hidePassword ? "eye-off-outline" : "eye-outline"}
          function={() => setHidePassword(!hidePassword)}
        />
        <Spacer />
        {error != "" && <CustomText variant="error">{error}</CustomText>}
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => onLogin(email, password)}
          disabled={email == "" || password == ""}
        >
          Login
        </AuthButton>
      </AccountContainer>
      <Spacer size="sm" />
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};
