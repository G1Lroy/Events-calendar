import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routs";
import { useSelectorType } from "../hooks/useSelectorType";

const AppRouter: FC = () => {
  const { isLogin } = useSelectorType((state) => state.loginState);
  const appRouts = isLogin ? privateRoutes : publicRoutes;

  return (
    <Routes>
      {appRouts.map((r) => (
        <Route key={r.path} path={r.path} Component={r.Component} />
      ))}
      <Route
        path="*"
        element={<Navigate to={isLogin ? "/home" : "/login"} replace />}
      />
    </Routes>
  );
};

export default AppRouter;
