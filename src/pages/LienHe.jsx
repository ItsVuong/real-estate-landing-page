import React, { useState, useEffect } from "react";
import { Contact } from "../components/contact";
import GoogleForm from "../components/GoogleForm";

const LienHe = () => {

  useEffect(() => {
    document.title = "Shophouse Vinhomes Wonder City Đan Phượng";
  }, []);
  return (
    <div id="" className=""
      style={{height: '100%'}}
    >
      <div id="features" className="text-center"
        style={{ marginTop: '50px', paddingBottom: '0px' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12  section-title" style={{ marginBottom: '10px' }}>
              <h2>THÔNG TIN LIÊN HỆ</h2>
              <p>Văn phòng: SB23-173 Vinhomes Ocean Park, Gia Lâm, Hà Nội</p>
              <p>Liên hệ ngay qua SĐT, Zalo hoặc Facebook</p>
              <div className="-flex justify-content-center align-items-center">
                <a className="btn btn-primary gold-gradient" style={{ cursor: 'auto', marginBottom: '20px', marginRight: '10px' }}>
                  <i className="fas fa-phone" style={{ marginRight: '8px' }}></i>
                  0367083529
                </a>
                <a
                  href="http://zalo.me/660139855964186242?src=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                  style={{ fontSize: "40px", textDecoration: "none" }}
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LienHe;
