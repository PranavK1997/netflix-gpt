import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO_URL, SUPPORTED_LANGUAGES, USER_ICON } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

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

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleSignOut = () => {
    signOut(auth).catch(() => navigate("/error"));
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="fixed top-0 left-0 right-0 px-6 sm:px-12 py-4 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-50 flex justify-between items-center">
      <img className="w-36 sm:w-44" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex items-center gap-4">
          {showGPTSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 m-2 bg-white text-red-700 rounded-lg opacity-80"
            onClick={handleGPTSearchClick}
          >
            {showGPTSearch ? "Home" : "GPT Search"}
          </button>
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
