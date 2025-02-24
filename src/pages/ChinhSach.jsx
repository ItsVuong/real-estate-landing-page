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
              <li>Vay ngân hàng lên đến 70%</li>
            </l>
          </p>
          <p>
            Chính sách bán hàng Vinhomes Wonder City từ chủ đầu tư dành cho những khách hàng đầu tiên đặt mua căn hộ tại dự án là vô cùng hấp dẫn với rất nhiều ưu đãi tại thời điểm này. Đặc biệt, chủ đầu tư và đối tác ngân hàng sẽ đưa ra chương trình hỗ trợ vay vốn với lãi suất cực kỳ ưu đãi ( dự kiến 0%)
          </p>

          <h3>Tiến độ thanh toán</h3>
          <div className="divide"></div>
          <p>
            <strong>Phương án 1: </strong>
            Khách hàng lựa chọn thanh toán bằng Vốn Tự Có
            A. Nhận chiết khấu 3% – khi khách hàng thanh toán theo tiến độ thông thường
            Tiến độ thông thường:
          </p>
          <p>
            <l>
              <li><strong>Lần 1:</strong> Đặt cọc 300 Triệu trong vòng 24 giờ đăng ký</li>
              <li><strong>Lần 2:</strong> Ký HĐMB trong vòng 7 ngày kể từ ngày đăng ký TTĐC: Đóng 10% GBCH</li>
              <li><strong>Lần 3:</strong> Đóng 15% GBCH (VAT) và 05% GBCH (chưa gồm VA) vào TTĐC đảm bảo thực hiện HĐMB</li>
              <li><strong>Lần 4:</strong> Đóng 20% GBCH</li>
              <li><strong>Lần 5:</strong> Đóng 25% GBCH (VAT) </li>
              <li><strong>Lần 6:</strong> Đóng 25% GBCH (VAT) + 100% KPBT+ VAT của 5% GBCH </li>
              <li><strong>Lần 7:</strong> Nhận chứng nhận quyền sở hữu – Bù trừ 5% – TTĐC </li>
            </l>
          </p>

          <p>
            <strong>Phương án 2: </strong>
            Khách hàng lựa chọn vay ngân hàng trả góp 35 năm
            Khách hàng được hỗ trợ lãi suất 0% trong khoảng thời gian chủ đầu tư hỗ trợ
            Miễn phí trả nợ trước hạn trong thời gian hỗ trợ lãi suất
          </p>

          <div className="divide"
            style={{marginTop: '20px'}}
          ></div>
          <p>
            Bài viết trên là chính sách bán hàng Vinhomes Wonder City (dự kiến) được đúc kết từ các dự án trước đây của CĐT. Thông tin chi tiết sẽ được chúng tôi cập nhật trong thời gian sớm nhất.
          </p>
          <a href='/'>Quay về trang chủ</a>

        </div>
        <div className="row">
          {/* 
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
          */}
        </div>
      </div>
    </div >
  );
};

export default ChinhSach;
