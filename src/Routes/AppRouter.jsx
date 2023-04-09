import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HOME } from "../Constants/pageRoutes";
import LandingPage from "../Pages/LandingPage/LandingPage";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
