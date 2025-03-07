import React, { useState } from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a href='/'>
            <img src="img/logo.png"
              className="logo page-scroll" href="#page-top"
            />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/vi-tri" className="page-scroll"
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif' }}
              >
                VỊ TRÍ
              </a>
            </li>
            <li>
              <a href="/mat-bang" className="page-scroll"
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif' }}
              >
                MẶT BẰNG
              </a>
            </li>
            <li>
              <a href="/tien-ich" className="page-scroll"
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif' }}
              >
                TIỆN ÍCH
              </a>
            </li>
            <li>
              <a href="/chinh-sach" className="page-scroll"
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif', }}
              >
                CHÍNH SÁCH
              </a>
            </li>
            {/* San pham start*/}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                style={{ backgroundColor: 'none', background: 'none' }}
              >
                SẢN PHẨM
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="biet-thu">Biệt thự</a>
                <a class="dropdown-item" href="lien-ke">Liền kề</a>
                <a class="dropdown-item" href="shophouse">Shophouse</a>
                <a class="dropdown-item" href="chung-cu">Chung cư</a>
              </div>
            </li>
            {/* End of San pham*/}
            {/* 
            <li>
              <a href="" className="page-scroll"
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif' }}
              >
                TIN TỨC
              </a>
            </li>
            */}
            <li>
              <a href="lien-he" className="page-scroll"
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif' }}
              >
                LIÊN HỆ
              </a>
            </li>
            <a className="btn btn-primary gold-gradient" style={{ cursor: 'auto'}}
              href='tel:0367083529'
            >
              <i className="fas fa-phone" style={{ marginRight: '8px' }}></i>
              <span>0367083529</span>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};
