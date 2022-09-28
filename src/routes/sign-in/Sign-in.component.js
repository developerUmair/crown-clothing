import SignUpForm from "../../sign-up-form/sign-up.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/Firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(response);
  };

  return (
    <>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with google pop up</button>
      <SignUpForm />
    </>
  );
};

export default SignIn;
