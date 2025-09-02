import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { PHOTO_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const emailRef = useRef(null);
  const passRef = useRef(null);
  const nameRef = useRef(null);

  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate data
    const errorsMessage = validateData(
      emailRef.current.value,
      passRef.current.value
    );
    setErrMsg(errorsMessage);
    if (errorsMessage) return;

    // logic for sign up and sign in

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          
          console.log(user);

            updateProfile(user, {
              displayName: nameRef.current.value, photoURL: PHOTO_URL
            }).then(() => {
              // Profile updated!
              const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            }).catch((error) => {
              // An error occurred
              setErrMsg(error.message)
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrMsg(errorCode + "-" + errorMessage);
          // ..
        });

    } else {
      signInWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage);
        });
    }

  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="bg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute my-44 mx-auto right-0 left-0 w-1/4  p-12 bg-black text-white rounded-lg opacity-85"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Name"
            className="my-4 p-2 w-full rounded-md bg-gray-700"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email"
          className="my-4 p-2 w-full rounded-md bg-gray-700"
        />
        <input
          ref={passRef}
          type="password"
          placeholder="Password"
          className="my-4 p-2 w-full rounded-md bg-gray-700"
        />
        <p className="text-red-600">{errMsg}</p>
        <button
          onClick={handleButtonClick}
          className="p-2 my-6 w-full bg-red-700 rounded-md"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleForm} className="cursor-pointer p-2 my-4">
          {isSignInForm
            ? "New to Netflix?Sign up now."
            : "Already Signed Up? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
