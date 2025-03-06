import React, { useState, useEffect } from "react";

const ChinhSach = () => {
  useEffect(() => {
    document.title = "Chính sách";
  }, []);
  return (
    <div id="article" className="">
      <div className="container">
        <div className="col-md-10 col-md-offset-1">
          <h2>Chính sách bán hàng</h2>
          <h3>Chính sách bao gồm: </h3>
          <div className="divide"></div>
          <p>
            <l>
              <li>Trả thẳng</li>
              <li>Trả tiến độ</li>
              <li>Hỗ trợ vay ngân hàng lên đến 70% ân hạn gốc lãi 24 tháng.</li>
            </l>
          </p>
          <p>
            Chính sách bán hàng Vinhomes Wonder City từ chủ đầu tư dành cho những khách hàng đầu tiên đặt mua căn hộ tại dự án là vô cùng hấp dẫn với rất nhiều ưu đãi tại thời điểm này. Đặc biệt, chủ đầu tư và đối tác ngân hàng sẽ đưa ra chương trình hỗ trợ vay vốn với lãi suất cực kỳ ưu đãi (dự kiến 0%)
          </p>
          <div className="row">
            <div className="col-md-6">
              <img src="img/chinh-sach-ban-hang.jpg" className="image-container"
                alt='Chính sách bán hàng'
              />
            </div>
            <div className="col-md-6">
              <img src="img/tien-do-thanh-toan.jpg" className="image-container"
                alt='Tiến độ thanh toán'
              />
            </div>
          </div>

          <a href='/'>Quay về trang chủ</a>

        </div>
      </div>
    </div >
  );
};

export default ChinhSach;
