import React from "react";
import useAuthContext from "../../lib/hooks/useAuthContext";
import useThemeContext from "../../lib/hooks/useThemeContext";
import { HiOutlineLightBulb, HiLightBulb } from "react-icons/hi";

export const Header = () => {
  const { isAuth, user, logout } = useAuthContext();
  const { darkMode, toggleDarkMode } = useThemeContext();

  return (
    <div className="Header">
      <div className="userHeader">
        <img src={user.image} alt="userPfp" className="userProfile" />
        <h4>{user ? ` ㅤ ${user.firstName} ${user.lastName}` : "Header"}</h4>
      </div>
      <div>
        {darkMode ? (
          <>
            <button
              className="btn btn-outline-light btn-md"
              onClick={() => toggleDarkMode()}
            >
              {darkMode ? <HiLightBulb /> : <HiOutlineLightBulb />}
            </button>
            {isAuth && (
              <button
                className="btn btn-outline-light"
                onClick={() => logout()}
              >
                Logout
              </button>
            )}
          </>
        ) : (
          <>
            <button
              className="btn btn-outline-dark btn-md"
              onClick={() => toggleDarkMode()}
            >
              {darkMode ? <HiLightBulb /> : <HiOutlineLightBulb />}
            </button>
            {isAuth && (
              <button className="btn btn-outline-dark" onClick={() => logout()}>
                Logout
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};
