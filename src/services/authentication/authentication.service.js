import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(getAuth(), email, password)
      .then((response) => {
        resolve(response);
      })
      .catch(reject);
  });
};
