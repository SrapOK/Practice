import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import { authRoutes, publicRoutes, notFoundRoute } from "../routes";

const AppRouter = (props) => {
  const isAuth = false;
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
