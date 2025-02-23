import React from "react";

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
          <a className="navbar-brand page-scroll" href="#page-top">
            LOGO
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="" className="page-scroll" 
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif', fontSize: '16px'}}
              >
                VỊ TRÍ
              </a>
            </li>
            <li>
              <a href="" className="page-scroll"
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif', fontSize: '16px'}}
              >
                MẶT BẰNG
              </a>
            </li>
            <li>
              <a href="" className="page-scroll"
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif', fontSize: '16px'}}
              >
                CHÍNH SÁCH
              </a>
            </li>
            <li>
              <a href="" className="page-scroll"
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif', fontSize: '16px'}}
              >
                SẢN PHẨM
              </a>
            </li>
            <li>
              <a href="" className="page-scroll"
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif', fontSize: '16px'}}
              >
                TIN TỨC
              </a>
            </li>
            <li>
              <a href="" className="page-scroll"
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif', fontSize: '16px'}}
              >
                LIÊN HỆ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
