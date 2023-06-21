import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../Contexts/Authentication/AuthProvider";
import { useContext, useState } from "react";
const ProtectedRoute = ({title, isProtected, children, redirectTo = "/login" }) => {
  const { auth } = useContext(AuthContext);
  console.log("Esto mido",localStorage.getItem("myUser"));
  /*if (!isProtected) {
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
  }*/
  
  if(title=="Login"){
    if(Object.keys(auth).length > 0){
      return <Navigate to={"/"} />
    }else if (Object.keys(auth).length == 0){
      return children;
    }
  }

  return children;

 
};

export default ProtectedRoute;
