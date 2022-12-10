import { useState, createContext } from "react";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((verifiedUser) => {
        setUser(verifiedUser);
        setIsLoading(false);
      })
      .catch((error) => {
        var err = error.code;
        if (err.includes("invalid-email")) {
          err = "Enter a valid email address";
        } else if (err.includes("user-not-found")) {
          err = "Incorrect Email or Password";
        }
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        isAuthenticated: Boolean(user),
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
