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
    <div id="article" className="">
      <div className="container">
        <div className="col-md-10 col-md-offset-1">
          <h2>Mặt bằng Vinhomes Wonder City Đan Phượng</h2>
          <p>
            Dự án Vinhomes Wonder City cũng giống như những dự án cao cấp khác của tập đoàn Vingroup, đều được thiết kế với quy mô hoành tráng, hiện đại, thượng lưu cũng như độc đáo nhất trên thị trường hiện nay.

            Mặt bằng Vinhomes Wonder City được quy hoạch trên tổng diện tích đất là 133ha và được chia thành 3 phân khu đó là: The Light, The Time và The Royal. Dự kiến sẽ có khoảng hơn 2350 căn biệt thự phân bố đều tại cả 3 phân khu.
          </p>
          <img src="img/vitri/l4.jpg" className="image-container" 
            alt='Mặt bằng Vinhomes Wonder Park'
            onClick={() => openImage("img/vitri/l4.jpg")}
          />
          <h3>Tổng thể mặt bằng Vinhomes Wonder City</h3>
          <div className="divide"></div>
          <p>
            Mật độ xây dựng của dự án chỉ khoảng 25% tổng diện tích quy hoạch, diện tích còn lại sẽ bao gồm:
            <l>
              <li><strong>Diện tích nhà ở:</strong> 30ha</li>
              <li><strong>Diện tích vườn hoa, cây cảnh:</strong> 3.5ha</li>
              <li><strong>Diện tích cây xanh:</strong> 20ha</li>
              <li><strong>Diện tích đường nội khu:</strong> 26ha</li>
              <li><strong>Diện tích khu chức năng:</strong> 12ha</li>
              <li><strong>Diện tích trường học:</strong> 2ha</li>
            </l>
          </p>
          <img src="img/vitri/l2.jpg" className="image-container" 
            alt='Tiến độ Vinhomes Wonder Park'
          />

          <h3>Mặt bằng phân khu Ánh Dương (The Light)</h3>
          <div className="divide"></div>
          <p>
            Phân khu Ánh Dương (The Light) nằm gần với mặt đường Tây Thăng Long đang được triển khai xây dựng và còn tiếp giáp trục đường 422 (sẽ được mở rộng lên 24m trong thời gian tới). Đây sẽ là phân khu sôi động nhất dự án Vinhomes Wonder City bởi nơi đây tập trung hầu hết các căn Shophouse của dự án,cùng với đó là TTTM Vincom Megamall với đa dạng hàng hóa và loại hình dịch vụ giải trí.
          </p>
          <img src="img/vitri/anh-duong.jpeg" className="image-container" 
            alt='Phân khu ánh dương (The Light) Wonder Park)'
          />
          <p>
            Phân khu Ánh Dương (The Light) có tổng số 729 căn, gồm đầy đủ các loại sản phẩm thấp tầng như: biệt thự đơn lập, biệt thự song lập, nhà liền kề và shophouse. Cụ thể như sau:
            <l>
              <li><strong>Biệt thự đơn lập:</strong> 5 căn</li>
              <li><strong>Biệt thự song lặp:</strong> 8 căn</li>
              <li><strong>Shophouse:</strong> 233 căn</li>
              <li><strong>Nhà liền kề:</strong> 483 căn</li>
            </l>
          </p>
          <p>
            Mật độ xây dựng trung bình tại phân khu vào khoảng 75% – 80%, tất cả các căn sẽ được xây 4 tầng, và dự kiến sẽ được bàn giao thô, oàn thiện mặt ngoài giống như các dự án khác của Vingroup.
          </p>

          <h3>
            Mặt bằng phân khu Thời Đại (The Time)
          </h3>
          <div className="divide"></div>
          <p>
            Theo tổng thể mặt bằng Vinhomes Wonder City thì phân khu Thời Đại (The Times) nằm tại vị trí trung tâm dự án, gần với các cụm tiện ích lớn đẳng cấp của dự án như: bể bơi trong nhà và ngoài trời, công viên GYM, BBQ, sân thể thao,…
          </p>
          <p>
            Phân khu Thời Đại (The Times) tập trung xây dựng 2 loại hình chính là: Nhà liên kề + Shophouse, cùng các loại tiện ích đa dạng. Và chỉ có 10 căn biệt thự song lập + 4 căn biệt thự đơn lập.
          </p>
          <img src="img/vitri/thoi-dai.jpeg" className="image-container" 
            alt='Phân khu Thời Đại (The Time) Wonder City'
          />

          <h3>
            Phân khu Hoàng Gia (The Royal)
          </h3>
          <div className="divide"> </div>
          <p>
            Phân khu Hoàng Gia (The Royal) là phân khu đẳng cấp nhất dự án Vinhomes Wonder City, được xây dựng với chủ yếu 2 loại hình sản phẩm là: Biệt thự đơn lập và Biệt thự song lập, trải dài theo đại lô Hoàng Gia với diện tích các căn biệt thự từ 228m2 – 400m2.
          </p>
          <p>
            Nơi đây được CĐT quy hoạch thành một khu tương đối riêng biệt, yên tĩnh, nằm gần với đê Thượng Cát. Nhưng từ phân khu Hoàng Gia đi tới các cụm tiện ích trung tâm cũng không quá xa. Phân khu này sẽ phù hợp với các khách hàng tầm trung niên trở đi. Những người mong muốn có một không gian yên tĩnh để nghỉ ngơi, thư giãn.
          </p>
          <img src="img/vitri/hoang-gia.jpeg" className="image-container"
          alt='Phân khu Hoàng Gia (The Royal) Wonder City'/>

          <a href='/' style={{ margin: '10px' }}>Quay về trang chủ</a>
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

export default MatBang;
