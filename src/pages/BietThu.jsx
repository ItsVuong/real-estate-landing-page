import React, { useState, useEffect } from "react";

const BietThu = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imgSrc) => {
    setSelectedImage(imgSrc);
    const modal = new window.bootstrap.Modal(document.getElementById("imageModal"));
    modal.show();
  };
  useEffect(() => {
    document.title = "Biệt thự Vinhomes Wonder City Đan Phượng";
  }, []);
  return (
    <div id="article" className="">
      <div className="container">
        <div className="col-md-10 col-md-offset-1">
          <h2>Biệt thự Vinhomes Wonder City Đan Phượng</h2>
          <p>
            Biệt thự Vinhomes Wonder City là dòng sản phẩm cao cấp nhất tại dự án, là sản phẩm khẳng định giá trị và đẳng cấp của chủ nhân sở hữu. Vậy các căn biệt thự Vinhomes Wonder City đẳng cấp như thế nào, có những ưu điểm vượt trội gì, và giá bán các căn biệt thự Vinhomes Wonder City. Tất cả sẽ có trong bài viết dưới đây.
          </p>
          <p>
            Vinhomes Wonder City có tổng số 285 căn biệt thự bao gồm 2 loại hình là: Biệt thự đơn lập & Biệt thự song lập.
          </p>

          <h3>Biệt thự đơn lập Vinhomes Wonder City</h3>
          <div className="divide"></div>
          <p>
            Đây là một sản phẩm được xây dựng với một lối kiến trúc độc đáo, sở hữu ưu thế tuyệt đối với phong cách kiến trúc độc lập với 4 mặt tiền được xây dựng giữa những lô đất riêng.
          </p>
          <p>
            Bốn mặt biệt thự đơn lập đều có mặt thoáng về không gian, diện tích để gia chủ thoải mái thiết kế “khu vườn cổ tích” mang dấu ấn riêng, tôn lên vẻ đẹp độc đáo của biệt thự, tận hưởng không khí trong lành, không gian thoải mái, tư do đậm chất Privacy & gần gũi với thiên nhiên.
          </p>
          <img src="img/biet-thu/bt1.jpg" className="image-container"
            alt='Biệt thự Vihnhomes Wonder City'
          />
          <p>
            Điều đáng lưu ý là phần diện tích xây dựng của Biệt thự Vinhomes Wonder City Đơn Lập sẽ không tiếp giáp với bất kỳ mặt tường rào nào xung quanh cả. Phần khoảng cách từ biệt thự cho đến tường rào được tính toán sao cho đủ cho chủ nhân đi lại một cách bình thường và thoải mái.
          </p>
          <p>
            Các căn biệt thự đơn lập tại Vinhomes Wonder City đều được thiết kế gồm 4 tầng sang trọng, diện tích từ 220m2 – 400m2, với phong cách kiến trúc Châu Âu. Chính điều này đã tạo nên một nét đẹp, sự độc đáo của mỗi căn biệt thự mà không phải nơi nào cũng có được.
          </p>

          <h3>Biệt thự song lập Vinhomes Wonder City</h3>
          <div className="divide"></div>
          <p>
            Khi nhắc tới biệt thự Vinhomes Wonder City thì không thể không nói đến loại hình biệt thự song lập với nhiều ưu điểm và độ phù hợp cao dành cho khách hàng.
          </p>
          <p>
            Đây là loại hình sản phẩm được thiết kế độc đáo, với hai căn biệt thự đối xứng với nhau để tạo thành một lối kiến trúc hoàn hảo. Các căn biệt thự song lập Vinhomes Wonder City có diện tích 150m2 – 300m2, nhỏ hơn những căn đơn lập và chỉ có 3 mặt tiền. Vì thế giá thành các căn biệt thự song lập sẽ ở tầm trung, phù hợp với túi tiền và nhu cầu của đa dạng khách hàng.
          </p>
          <img src="img/biet-thu/bt2.jpg" className="image-container"
            alt='Phân khu ánh dương (The Light) Wonder City)'
          />
          <p>
            Các căn biệt thự song lập tại Vinhomes Wonder City được thiết kế với 4 tầng hiện đại theo phong cách châu Âu, phù hợp với nhu cầu và thị hiếu của người Việt Nam. Những căn song lập được đặt tại vị trí đẹp tại dự án, gần với khu vực hồ, bể bơi và khu tiện ích của toàn dự án.
          </p>

          <h3>
            Biệt thự Vinhomes Wonder City - Cơ hội đầu tư
          </h3>
          <div className="divide"></div>
          <p>
            Các căn biệt thự luôn là dòng sản phẩm đem lại lợi nhuận đầu tư cao nhất từ các dự án trước đây của chủ đầu tư Vinhomes. Và chắc chắn, biệt thự Vinhomes Wonder City cũng sẽ không ngoại lên bởi những ưu điểm nổi bật chung từ dự án mang lại, và những điểm nhấn, sức hút riêng từ chính các căn biệt thự Vinhomes Wonder City.
          </p>
          <p>
            Các nhà đâu tư dự đoán, các căn biệt thự Vinhomes Wonder sẽ là “cơn sốt” trên thị trường BĐS vào thời điểm mở, bởi sức hút và số lượng có hạn. Hãy nhanh tay đăng ký để được tư vấn và nhận báo giá trực tiếp từ CĐT.
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
    </div>
  );
};

export default BietThu;
