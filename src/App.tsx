import "./App.css";
import { Menu } from "./pages/menu";

import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="about" element={<h1>STUFF</h1>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
