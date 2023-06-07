import React from 'react'
import {Route,Routes} from "react-router-dom"
import {pagesData} from '../Pages/pagesData'

const Router = () => {
  const pageRoutes = pagesData.map((pages)=>{
    return <Route key={pages.title} path={`/${pages.path}`} element={pages.element}></Route>
  });

  return <Routes>{pageRoutes}</Routes>
};

export default Router
