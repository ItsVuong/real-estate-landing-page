import React from "react";

export const Intro = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>VINHOMES WONDER CITY</h2>
          <h3>ÁNH SÁNG THỊNH VƯỢNG ĐÁNH THỨC KỶ NGUYÊN MỚI PHÍA TÂY HÀ NỘI </h3>
          <h5>
            "Mặt trời luôn mọc từ phía Đông, nhưng Hừng Đông và Bình Minh chỉ thật sự rực rỡ khi chạm đến phía Tây – nơi ánh sáng bừng lên mạnh mẽ nhất, soi rọi một kỷ nguyên mới."
          </h5>
          <h5>
            Mảnh ghép cuối cùng hoàn thiện bức tranh phát triển phía Tây Hà Nội – Vinhomes Wonder City đã dần lộ diện!
          </h5>
          <img src="img/home_1.jpg" className="image-container" />
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
    </div>
  );
};
