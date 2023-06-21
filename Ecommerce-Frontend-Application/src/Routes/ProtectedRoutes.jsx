import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../Contexts/Authentication/AuthProvider";
import { useContext, useState } from "react";
const ProtectedRoute = ({ isProtected, children, redirectTo = "/login" }) => {
  const { auth } = useContext(AuthContext);
  console.log(localStorage.getItem("myUser").user);
  if (!isProtected) {
    return children;
  }

  if(isProtected && Object.keys(auth).length == 0){
    return <Navigate to={redirectTo} />
  }

  if (isProtected && Object.keys(auth).length > 0) {
    if(auth.user.isAdmin==true){
      return children;
    }else if(auth.user.isAdmin==false){
      return <Navigate to={redirectTo} />
    }
  }
  
 
};

export default ProtectedRoute;
