import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-10 flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12"
            alt="user-icon"
            src="https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABV5-FWD-wWeaDr2Qys1mauPBXTuEYY3VnTa5f_Xz2ghNS194XnVF4K9rpEZb5sRrllsDLD7_I4gEiUZoZdgABOr2NJh_A5g.png?r=44d"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
