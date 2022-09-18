import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Faction from "./views/Faction";
import Race from "./views/Race";
import Buildings from "./views/Buildings";
import Tech from "./views/Tech";
import Unites from "./views/Unites";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/race" element={<Race />}></Route>
          <Route path="/faction" element={<Faction />}></Route>
          <Route path="/buildings" element={<Buildings />}></Route>
          <Route path="/tech_tree" element={<Tech />}></Route>
          <Route path="/unites" element={<Unites />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
