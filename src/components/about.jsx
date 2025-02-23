import React from "react";

export const About = (props) => {
  return (
      <div id="about">
    <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/home_2.jpeg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>THÔNG TIN TỔNG QUAN</h2>
                <p>
                  Mảnh ghép cuối cùng hoàn thiện bức tranh phát triển phía Tây Hà Nội – Vinhomes Wonder City đã dần lộ diện!
                </p>
                <div className="list-style">
                  <div className="col-lg-12 col-sm-12 col-xs-12">
                    <ul>
                      <li>
                        <strong>Chủ đầu tư: </strong> Tập đoàn VinGroup
                      </li>
                      <li>
                        <strong>Vị trí: </strong>Đan Phượng, Hà Nội</li>
                      <li>
                        <strong>Quy mô: </strong>133.4ha</li>
                      <li>
                        <strong>Diện tích: </strong>88m2 - 337.21m2 với 100% các căn có mặt tiền từ 8m trở lên</li>
                      <li>
                        <strong>Mật độ xây dựng: </strong>26.7%</li>
                      <li>
                        <strong>Hình thức sở hữu: </strong>Sở hữu lâu dài</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
