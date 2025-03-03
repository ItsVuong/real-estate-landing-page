import React, { useState, useEffect } from "react";

const MatBang = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imgSrc) => {
    setSelectedImage(imgSrc);
    const modal = new window.bootstrap.Modal(document.getElementById("imageModal"));
    modal.show();
  };
  useEffect(() => {
    document.title = "Mặt Bằng Vinhomes Wonder City";
  }, []);
  return (
    <>
      <div id="article" className="">
        <div className="container">
          <div className="col-md-10 col-md-offset-1">
            <h2>MẶT BẰNG VINHOMES ĐAN PHƯỢNG – ĐIỂM NHẤN CHÍNH TẠI 2 PHÂN KHU</h2>
            <p>
              Dự án Vinhomes Đan Phượng còn được biết đến với tên gọi thương mại là Vinhomes Wonder City, một dự án thông minh tại phía Tây Hà Nội. Với quy hoạch đồng bộ, thiết kế hiện đại và hệ thống tiện ích vượt trội, dự án mang đến một thiên đường an cư lý tưởng cho cư dân tinh hoa. Đặc biệt, mặt bằng Vinhomes Đan Phượng đã được điều chỉnh và nâng cấp với hai phân khu Hừng Đông và Bình Minh, tạo nên một bức tranh đô thị hài hòa giữa sự sôi động và yên bình. Vậy điều gì khiến dự án này trở thành tâm điểm của thị trường bất động sản? Hãy cùng khám phá ngay bây giờ!
            </p>
            <img src="img/vitri/l4.jpg" className="image-container"
              alt='Mặt bằng Vinhomes Wonder City'
              onClick={() => openImage("img/vitri/l4.jpg")}
            />
            <h3>TỔNG MẶT BẰNG VINHOMES WONDER CITY ĐAN PHƯỢNG</h3>
            <div className="divide"></div>
            <p>
              Vinhomes Đan Phượng là khu đô thị cao cấp được Tập đoàn Vingroup đầu tư phát triển, sở hữu quy mô lên tới 133ha, được thiết kế theo mô hình “Thành phố của những trải nghiệm”, lấy cảm hứng từ những đô thị hiện đại trên thế giới.
            </p>
            <p>
              Một trong những điểm nổi bật trên mặt bằng Vinhomes Wonder City chính là dự án được quy hoạch bài bản, phân chia thành hai phân khu đô thị chính: Phân khu Hừng Đông (Wonder Avenue) mang phong cách hiện đại, sôi động, phù hợp với những cư dân yêu thích sự tiện nghi và kết nối. Phân khu Bình Minh (Wonder Bay) được thiết kế theo hướng sinh thái, yên bình, tận dụng lợi thế mặt nước để mang đến không gian sống trong lành.
            </p>
            <img src="img/tong-the-du-an.jpg" className="image-container"
              alt='Tiến độ Vinhomes Wonder City'
            />

            <h3>Mặt Bằng Phân Khu Hừng Đông (Wonder Avenue)</h3>
            <div className="divide"></div>
            <p>
              <strong>Phân khu phố Hừng Đông (Wonder Avenue)</strong> với vị trí nằm ở phía Bắc và Tây Bắc trên mặt bằng dự án Vinhomes Đan Phượng, được xem là phân khu có thế mạnh về kinh doanh buôn bán, trung tâm sầm uất và năng động nhất Vinhomes Đan Phượng. Đây là khu vực tập trung nhiều tiện ích lớn như trung tâm thương mại Vincom Mega Mall, hệ thống trường học Vinschool, khu thể thao đa năng và khu vui chơi giải trí hiện đại. Phân khu Hừng Đông sở hữu vị trí tiếp giáp trục đường 422 hiện hữu (sắp tới con đường này sẽ được mở rộng lên 24m). Bên cạnh đó với đường Tây Thăng Long đang được triển khai gấp rút.
            </p>
            <img src="img/tong-the-du-an-2.webp" className="image-container"
              alt='Hình ảnh phân khu Hừng Đông (Wonder Avenue)'
            />
            <p>
              Trong phân khu bao gồm đầy đủ các loại sản phẩm thấp tầng và cao tầng như: biệt thự đơn lập, biệt thự song lập, nhà liền kề và shophouse với tổng số 1.521 căn và 2 tòa cao tầng. Đan xen với các căn thấp tầng và cao tầng đó là hệ thống công viên và trường học, đặc biệt phân khu Hừng Đông còn có di tích lịch sử Quốc Gia Lăng Văn Sơn nằm bên trong, khu di tích này sẽ được Vingroup mở rộng hơn và tu sửa lại để khách tham quan cũng như cư dân trong dự án có thể đến thắp hương.
            </p>

            <h3>
              Mặt Bằng Phân Khu Bình Minh (Wonder Bay)
            </h3>
            <div className="divide"></div>
            <p>
              Khác với sự sôi động của phố Hừng Đông, phân khu Bình Minh (Wonder Bay) mang đến một không gian sống yên bình, gần gũi với thiên nhiên. Nằm tại phía Đông Nam của dự án, phân khu này được thiết kế theo phong cách sinh thái, tận dụng lợi thế mặt nước, kênh sinh thái và hồ điều hòa để tạo nên một môi trường sống trong lành. Mặt bằng Vin Wonder City phân khu Bình Minh (Wonder Bay) được định vị là phân khu cao cấp nhất tại dự án Vinhomes Đan Phượng và sẽ trở thành phân khu đóng giống như các phân khu tại các dự án như Vinhomes Green Bay, Vinhomes Ocean Park… điều này góp phần mang đến cho cư dân tinh hoa một cuộc sống yên bình, không ảnh hưởng tới sự riêng tư.
            </p>
            <img src="img/phan-khu-binh-minh.webp" className="image-container"
              alt='Phân khu Thời Đại (The Time) Wonder City'
            />
            <p>
              Mặt bằng phân khu Bình Minh (Wonder Bay) với 835 căn thấp tầng và 2 tòa chung cư. Đan xen với các căn thấp tầng và cao tầng đó là bệnh viện Vinmec, trường học Vinschool và cụm công viên thể thao tổng hợp, công viên Warlist Park được chủ đầu tư Vingroup quy hoạch bài bản, mang đến không gian sống tràn ngập hơi thở tự nhiên dành cho cư dân. Phân khu Bình Minh (Wonder Bay) với số lượng 835 căn, ít hơn so với 1.521 căn của phân khu Hừng Đông (Wonder Avenue), nhưng chính điều này lại mang đến những lợi thế đặc biệt. Trước hết, mật độ dân cư thấp giúp cư dân tận hưởng không gian sống yên tĩnh, riêng tư, tránh sự đông đúc, ồn ào.
            </p>
            <p>
              Bên cạnh đó, phân khu Bình Minh được quy hoạch với nhiều không gian xanh, hồ điều hòa, kênh sinh thái và công viên ven sông, tạo nên môi trường sống trong lành, thoáng đãng, tốt cho sức khỏe. Ngoài ra, số lượng căn hộ ít giúp cư dân có trải nghiệm sử dụng tiện ích thoải mái hơn, từ hồ bơi, công viên, đến bệnh viện Vinmec ngay trong nội khu. Đặc biệt, với tính khan hiếm, bất động sản tại phân khu Bình Minh có tiềm năng tăng giá cao, nhất là khi khu vực Đan Phượng phát triển mạnh mẽ. Nhờ những lợi thế này, phân khu Bình Minh trở thành lựa chọn lý tưởng cho những ai tìm kiếm một không gian sống đẳng cấp, gần gũi thiên nhiên và đầy tiềm năng đầu tư.
            </p>
            <a href='/'>Quay về trang chủ</a>

          </div>
        </div>
      </div>
    </>
  );
};

export default MatBang;
