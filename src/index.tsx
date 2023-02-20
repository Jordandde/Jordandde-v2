import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import Page2 from "./pages/Experience";
import Page3 from "./pages/Projects";
import Page4 from "./pages/Contact";
import Page1 from "./pages/About";
// testt
const routing = (
  <Router >
    <Routes>
        <Route path="/" element={<App/>} />
      <Route path="/About" element={<Page1/>} />
      <Route path="/Experience" element={<Page2/>} />
      <Route path="/Projects" element={<Page3/>} />
      <Route path="/Contact" element={<Page4/>} />
    </Routes>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
