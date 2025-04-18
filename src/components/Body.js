import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, password, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            password: password,
            photoURL: photoURL,
          })
        );
        // ...
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
