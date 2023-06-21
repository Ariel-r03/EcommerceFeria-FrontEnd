import React, { useContext, useState } from "react";
import { Route, Routes, useRoutes, Router } from "react-router-dom";
import { pagesData } from "../Pages/pagesData";
import ProtectedRoute from "./ProtectedRoutes";

const Routers = () => {
  const pageRoutes = pagesData.map((pages) => {
    return (
      <Route
        key={pages.title}
        path={`/${pages.path}`}
        element={pages.element}
      ></Route>
    );
    
  });

  return <Routes>{pageRoutes}</Routes>;
};
export default Routers;
