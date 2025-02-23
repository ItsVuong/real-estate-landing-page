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
          <a href='/'>
            <img src="img/logo.png"
              className="navbar-brand page-scroll" href="#page-top"
              style={{
                height: '50px', width: 'auto', maWidth: '150px', objecFit: 'contain',
                padding: '0 3px',
                margin: 0,
                backgroundColor: 'white'
              }}
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
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif'}}
              >
                VỊ TRÍ
              </a>
            </li>
            <li>
              <a href="/mat-bang" className="page-scroll"
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif'}}
              >
                MẶT BẰNG
              </a>
            </li>
            <li>
              <a href="" className="page-scroll"
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif',}}
              >
                CHÍNH SÁCH
              </a>
            </li>
            <li>
              <a href="" className="page-scroll"
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif'}}
              >
                SẢN PHẨM
              </a>
            </li>
            <li>
              <a href="" className="page-scroll"
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif'}}
              >
                TIN TỨC
              </a>
            </li>
            <li>
              <a href="" className="page-scroll"
                style={{ fontFamily: 'Roboto, Playfair Display, sans-serif', fontSize: '16px' }}
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
