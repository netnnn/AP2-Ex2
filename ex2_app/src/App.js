import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Register from "./Register/Register";
import Main_screen from "./Main_screen/Main_screen";
import Login from "./Login/Login";

function App() {
  const [LoggedUser, SetLoggedUser] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login SetLoggedUser={SetLoggedUser} />}
        ></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route
          path="/Main_screen"
          element={<Main_screen LoggedUser={LoggedUser} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
