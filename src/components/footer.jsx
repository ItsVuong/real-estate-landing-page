import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";


export const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src='img/logo.png' className="logo" />
          </div>
          <div className="col-md-4">
            <h3 style={{ color: 'white' }}>
              Thông tin
            </h3>
            <p>
              <l>
                <li>
                  <a href='/vi-tri'
                    style={{ color: 'white' }}
                  >Vị trí</a>
                </li>
                <li>
                  <a href='/mat-bang'
                    style={{ color: 'white' }}
                  >Mặt bằng</a>
                </li>
                <li>
                  <a href='/tien-ich'
                    style={{ color: 'white' }}
                  >Tiện ích</a>
                </li>
                <li>
                  <a href='/chinh-sach'
                    style={{ color: 'white' }}
                  >Chính sách</a>
                </li>
              </l>
            </p>
          </div>
          <div className="col-md-4">
            <h3 style={{ color: 'white' }}>
              Liên hệ
            </h3>
            <p>
              <strong>Văn phòng: </strong> SB23-173 Vinhomes Ocean Park, Gia Lâm, Hà Nội<br />
              <strong>SĐT: </strong>036 708 3529<br />
              <strong>Zalo: </strong>036 708 3529<br />
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61573782980754"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
              style={{ fontSize: "24px", textDecoration: "none" }}
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
