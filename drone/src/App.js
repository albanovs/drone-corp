import { Route, Routes } from "react-router-dom";
import { HomePage } from "./page/home-page";
// import Portfolio from "./page/Portfolio";
import About from './page/about';
function App() {
  return (
    <div className="App">
          <HomePage/>
        <Portfolio/>
    </div>
  );
}

export default App;
