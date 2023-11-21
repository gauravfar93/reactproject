import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";
import { Employees } from "../pages/Employees";


export const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Dashboard/>} path='/dashboard'/>
      <Route element={<Employees/>} path='/employees'/>
    </Routes>
  );
};
