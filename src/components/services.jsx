import React from "react";

export const Services = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>CÁC LOẠI HÌNH SẢN PHẨM</h2>
          <p>
            Trải nghiệm sống thời thượng – Định nghĩa chuẩn sống mới với hệ sinh thái tiện ích toàn diện từ Vingroup.
          </p>
        </div>
        <div id="row">
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src='img/nha1.jpeg' alt="..." className="team-img" />
              <div className="caption">
                <h4>Biệt thự
                </h4>
                <p>
                  Là sản phẩm đẳng cấp nhất tại dự án với tổng số 285 căn, Có diện tích từ 150m2 – 400m2, được thiết kế theo phong cách Tân cổ điển sang trọng, tinh tế cùng, phong cách kiến trúc độc lập với 4 mặt tiền được xây dựng giữa…
                </p>
              </div>
                <button className="btn btn-primary gold-gradient">Xem chi tiết</button>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src='img/nha_3.jpeg' alt="..." className="team-img" />
              <div className="caption">
                <h4>Nhà liền kề
                </h4>
                <p>
                  Liền kề Wonder Park được thiết kế với chiều cao 4 tầng diện tích linh hoạt từ 72m2 – 96m2 – 110m2 theo phong cách tân cổ điển sang trọng chia làm 2 loại liền kề tiêu chuẩn và liền kề nhà vườn….
                </p>
              </div>
                <button className="btn btn-primary gold-gradient">Xem chi tiết</button>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src='img/shophouse.jpeg' alt="..." className="team-img" />
              <div className="caption">
                <h4>Shophouse
                </h4>
                <p>
                  Là sản phẩm chiến lược tại dự án với tổng số 726 căn, thiết kế cao 4 tầng, diện tích từ 96 – 136 m2 với mặt tiền rộng tới 8m, được bố trí thành các dãy phố tập nập với mặt tiếp giáp với trục đường chính…
                </p>
              </div>
              <button className="btn btn-primary gold-gradient">Xem chi tiết</button>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src='img/chungcu.jpg' alt="..." className="team-img" />
              <div className="caption">
                <h4>Căn hộ chung cư
                </h4>
                <p>
                  Với thiết kế hợp lý từ 1 đến 3 phòng ngủ, căn hộ chung cư  Vinhomes Đan Phượng đáp ứng mọi nhu cầu từ sử dụng của khách hàng, đem đến không gian sống lý tưởng, tiện nghi cho chủ nhân căn hộ….
                </p>
              </div>
              <button className="btn btn-primary gold-gradient">Xem chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
