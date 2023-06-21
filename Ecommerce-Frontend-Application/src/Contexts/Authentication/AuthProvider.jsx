import { createContext, useState,useEffect } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('myUser');
    if (storedData) {
      setAuth(JSON.parse(storedData));
    }
  }, []);

  // Actualiza los datos almacenados en el almacenamiento local cada vez que cambien
  useEffect(() => {
    localStorage.setItem('myUser', JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
