import React, { useEffect, useState } from 'react'
import { loginRequest } from '../../api/user'; 

const LOCAL_STORAGE_USER_KEY = 'user-key';

export const AuthContext = React.createContext(null)

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    if(!user) return;

    setUser(JSON.parse(user));
  }, [])

  const login = async (data) => {
    try {
      const res = await loginRequest(data);
      setLoginError(null);
      setUser(res.data);
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(res.data));
    } catch (error) {
      setLoginError('Invalid username and password combination');
    }
  }

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
  }

  return (
    <AuthContext.Provider value={{isAuth: !!user, user, loginError, login, logout: logoutUser}}>{children}</AuthContext.Provider>
  )
}
 