import { Image } from "./image";
import React from "react";

export const TongThe = (props) => {
  return (
    <div id="portfolio" className="text-center" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-title">
          <h2>TỔNG THỂ QUY HOẠCH</h2>
          <p className="text-content">
            Dự án Vinhomes Wonder City cũng giống như những dự án cao cấp khác của tập đoàn Vingroup, đều được thiết kế với quy mô hoành tráng, hiện đại, thượng lưu cũng như độc đáo nhất trên thị trường hiện nay.
          </p>
          <img src="img/quy-hoach.jpg" className="image-container" />
          <p className="text-content">
            Mặt bằng Vinhomes Wonder City được quy hoạch trên tổng diện tích đất là 133ha và được chia thành 3 phân khu đó là: The Light, The Time và The Royal. Dự kiến sẽ có khoảng hơn 2350 căn biệt thự phân bố đều tại cả 3 phân khu. Mật độ xây dựng của dự án chỉ khoảng 25% tổng diện tích quy hoạch, diện tích còn lại sẽ bao gồm: nhà ở, vườn hoa, cây xanh, đường nội khu, các khu chức năng, trường học...
          </p>
        </div>
        <div className="row">
        </div>
      </div>
    </div>
  );
};
