import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO_URL, USER_ICON } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, password, photoURL } = user;
        dispatch(
          addUser({
            uid,
            displayName,
            email,
            password,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).catch(() => navigate("/error"));
  };

  return (
    <div className="fixed top-0 left-0 right-0 px-6 sm:px-12 py-4 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-50 flex justify-between items-center">
      <img className="w-36 sm:w-44" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded"
            alt="user-icon"
            src={USER_ICON}
          />
          <button
            className="text-white text-sm sm:text-base font-semibold hover:underline"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
