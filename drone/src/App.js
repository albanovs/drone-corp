import { Route, Routes } from "react-router-dom";
import { HomePage } from "./page/home-page";
import About from "./page/about";
import { Pogruj } from "./page/pogruj";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<About />} />
        <Route path="/pogruj" element={<Pogruj />} />
      </Routes>
    </div>
  );
}

export default App;
