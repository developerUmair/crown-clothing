import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/Firebase.utils";

const SignIn = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);
  // }, []);

  useEffect(
    () => async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    },
    []
  );

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(response);
  };

  /*  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log({ user });
  }; */

  return (
    <>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with google pop up</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button>
    </>
  );
};

export default SignIn;
