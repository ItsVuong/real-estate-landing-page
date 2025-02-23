import SmoothScroll from "smooth-scroll";
import "./App.css";
import HomePage from "./pages/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
