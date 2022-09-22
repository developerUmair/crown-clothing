import React from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(response);
  };
  return (
    <>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
    </>
  );
};

export default SignIn;
