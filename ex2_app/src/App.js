import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Main_screen from "./Main_screen/Main_screen";
import Register from "./Register/Register";
import Login from "./Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Main_screen" element={<Main_screen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
