import "./App.css";
import HomePage from "./pages/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import MatBang from "./pages/MatBang";
import ViTri from "./pages/ViTri";
import TienIch from "./pages/TienIch";
import ChinhSach from "./pages/ChinhSach";
import BietThu from "./pages/BietThu";
import LienKe from "./pages/LienKe";
import Shophouse from "./pages/ShopHouse";
import ChungCu from "./pages/ChungCu";
import LienHe from "./pages/LienHe";
import BaoMat from "./pages/BaoMat";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react";



const App = () => {
  const runOnLoad = () => {
    toast(<div>
      Liên hệ ngay:
      <a href='lien-he' style={{marginLeft: "10px"}}className="btn btn-primary">Tại đây!</a>
    </div>,
      {
      position: "bottom-right",
      autoClose: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
  }
  useEffect(() => {
    const url = window.location.href; // Get the current URL
    if (!url.includes('lien-he')) {
      runOnLoad();
    }
  })
  return (
    <>
      <Navigation />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mat-bang" element={<MatBang />} />
          <Route path="/vi-tri" element={<ViTri />} />
          <Route path="/tien-ich" element={<TienIch />} />
          <Route path="/chinh-sach" element={<ChinhSach />} />
          <Route path="/biet-thu" element={<BietThu />} />
          <Route path="/lien-ke" element={<LienKe />} />
          <Route path="/shophouse" element={<Shophouse />} />
          <Route path="/chung-cu" element={<ChungCu />} />
          <Route path="/lien-he" element={<LienHe />} />
          <Route path="/bao-mat" element={<BaoMat />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
