import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainComponent from "./components/MainComponent";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainComponent />
      </BrowserRouter>
    </>
  );
}
