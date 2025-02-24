import SmoothScroll from "smooth-scroll";
import "./App.css";
import HomePage from "./pages/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import MatBang from "./pages/MatBang";
import ViTri from "./pages/ViTri";
import TienIch from "./pages/TienIch";
import ChinhSach from "./pages/ChinhSach";


const App = () => {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mat-bang" element={<MatBang />} />
          <Route path="/vi-tri" element={<ViTri/>}/>
          <Route path="/tien-ich" element={<TienIch/>}/>
          <Route path="/chinh-sach" element={<ChinhSach/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
