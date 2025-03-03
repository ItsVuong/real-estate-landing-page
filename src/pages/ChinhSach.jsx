import React, { useState, useEffect } from "react";

const ChinhSach = () => {
  useEffect(() => {
    document.title = "Chính sách";
  }, []);
  return (
    <div id="article" className="" style={{height: "100%"}}>
      <div className="container">
        <div className="col-md-10 col-md-offset-1">
          <h2>Chính sách bán hàng</h2>
          <h3>Chính sách bao gồm: </h3>
          <div className="divide"></div>
          <p>
            <l>
              <li>Trả thẳng</li>
              <li>Trả tiến độ</li>
              <li>Vay ngân hàng lên đến 70%</li>
            </l>
          </p>
          <p>
            Chính sách bán hàng Vinhomes Wonder City từ chủ đầu tư dành cho những khách hàng đầu tiên đặt mua căn hộ tại dự án là vô cùng hấp dẫn với rất nhiều ưu đãi tại thời điểm này. Đặc biệt, chủ đầu tư và đối tác ngân hàng sẽ đưa ra chương trình hỗ trợ vay vốn với lãi suất cực kỳ ưu đãi ( dự kiến 0%)
          </p>

          <a href='/'>Quay về trang chủ</a>

        </div>
      </div>
    </div >
  );
};

export default ChinhSach;
