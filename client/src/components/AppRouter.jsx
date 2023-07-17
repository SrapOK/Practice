import React from "react";
import { Routes, Route } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

import Layout from "./Layout";
import { authRoutes, publicRoutes, notFoundRoute } from "../routes";

const AppRouter = (props) => {
  const isAuth = useSelector((state) => state.userSlice.isAuth);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route index key={path} path={path} element={<Component />} />
          ))}

        {publicRoutes.map(({ path, Component }) => (
          <Route index key={path} path={path} element={<Component />} />
        ))}
      </Route>
      <Route index {...notFoundRoute}></Route>
    </Routes>
  );
};

export default AppRouter;
