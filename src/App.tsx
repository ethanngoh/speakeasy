import "./App.css";
import { Menu } from "./pages/menu";

import { HashRouter, Routes, Route } from "react-router-dom";
import { Recipes } from "./pages/recipes";
import { Recipe } from "./pages/recipe";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipes/:cocktailId" element={<Recipe />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
