import React, { useState, useEffect } from "react";

const TienIch = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    document.title = "Tiện ích Vinhomes Wonder City";
  }, []);
  return (
    <div id="article" className="">
      <div className="container">
        <div className="col-md-10 col-md-offset-1">
          <h2>Tiện ích Vinhomes Wonder City Đan Phượng</h2>
          <p>
            Hệ thống cảnh quan và tiện ích Vinhomes Wonder City được chủ đầu tư đặc biệt chú trọng và phát triển. Dự án sở hữu không chỉ một mà tới chín cụm tiện ích trong dự án, tập trung chủ yếu tại khu vực quảng trường trung tâm Times Square, công viên Đại dương Blue Marine.

            Tại Vinhomes Wonder City, cư dân sẽ được tận hưởng trọn vẹn từng phút giấy cuộc sống với không gian xanh mát giữa lòng thành phố, các địa điểm vui chơi giải trí 4 mùa, những không gian yên bĩnh bên gia đình, góp phần nâng tầm cuộc sống của cư dân.
          </p>
          <img src="img/tien-ich/park.jpg" className="image-container"
            alt='Vinhomes Wonder City có hệ thống công viên, các địa điểm vui chơi'
          />
          <h3>Diện tích quy hoạch tiện ích Vinhomes Wonder City</h3>
          <div className="divide"></div>
          <p>
            Vinhomes Wonder City có mật độ xây dựng chỉ khoảng 25% trong khuôn viên rộng hơn 133ha. Diện tích còn lại, chủ đầu tư dành để đầu tư vào xây dựng hệ thống tiện ích nội khu như: không gian mặt nước, cảnh quan, hạ tầng giao thông, tổ hợp các công viên, tổ hợp vườn điêu khắc trong dự án…
          </p>
          <p>
            Cùng với đó là hệ thống hạ tầng đồng bộ theo mô hình chuẩn của Vinhomes gồm trường học, bệnh viện, trung tâm thương mại Vincom đáp ứng được gần như đầy đủ các nhu cầu sống cao cấp của cư dân.
          </p>
          <img src="img/tien-ich/park2.jpg" className="image-container"
            alt='Tiến độ Vinhomes Wonder City'
          />

          <h3>Tiện ích Vinhomes Wonder City</h3>
          <div className="divide"></div>
          <p>
            Vinhomes Wonder City sở hữu thiếu hệ thống giáo dục quốc tế. Với hệ thống trường liên cấp từ mầm non đến THPT Vinschool, hay thậm chí là cả VinUni chắc chắn các cư dân nhí sẽ có một môi trường đào tạo giáo dục để phát triển tốt nhất.
          </p>
          <img src="img/vinschool.jpg" className="image-container"
            alt='Hệ thống trường liên cấp Vinschool'
            title="Hệ thống trường liên cấp VinSchool"
          />
          <div style={{ marginBottom: '10px' }}></div>
          <p>
            Với dịch vụ y tế 5 sao nằm ngay trong dự án, đảm bảo di chuyển thuận tiện và điều trị kịp thời trong mọi tình huống bất chợt, Bạn sẽ không còn lo tới các vấn đề bệnh tật, những sự cố ngoài ý muốn gây hại tới sức khỏe. Ở biệt thự Vinhomes Wonder City bạn sẽ được bảo đảm sức khỏe trọn đời.
          </p>
          <img src="img/tien-ich/vinmec.jpg" className="image-container"
            alt='Hệ thống bệnh viện Vinmec'
            title="Hệ thống bệnh viện Vinmec"
            style={{objectFit: 'contain', maxHeight: '450px'}}
          />
          <div style={{ marginBottom: '10px' }}></div>

          <p>
            Trung tâm thương mại Vincom là nơi đáp ứng tất cả những nhu thiết yếu của cư dân. Các khu vui chơi, giải trí, rạp chiếu phim hiện đại sẽ giúp cư dân có những phút giây thoải mái, giảm căng thẳng mệt mỏi để có thể làm việc tốt hơn. Vinmart, nơi cung cấp cho cư dân những tiện nghi đẳng cấp cùng những bữa ăn thơm ngon và an toàn cùng thương hiệu rau sạch VinEco.

Ngoài ra, đây cũng là điểm lý tưởng thu hút bạn bè, quan khách của cư dân đến thưởng ngoạn và mua sắm tận hưởng..
          </p>
          <img src="img/tien-ich/vineco.jpg" className="image-container"
            alt='Hệ thống Vinmart, VinEco'
            title='Hệ thống Vinmart, VinEco'
          />
          <div style={{ marginBottom: '10px' }}></div>

          <p>
            Ngoài ra, Vinhomes Wonder City có hệ thống an ninh gồm 3 lớp và hệ thống PCCC đạt chuẩn Châu Âu, với những thiết bị hiện đại nhất đề phòng khi có cháy xảy ra, đảm bảo luôn có những cảnh bảo kịp thời về nguy cơ mất an toàn cháy nổ và xử lý mọi rủi ro, mọi trường hợp. Vinhomes Wonder City hứa hẹn sẽ đem lại cảm giác an toàn tuyệt đối cho các cư dân cao cấp.
          </p>
          <img src="img/tien-ich/an-ninh.jpg" className="image-container"
            alt='An ninh Vinhomes'
            title='Đội ngũ bảo vệ Vinhomes'
            style={{objectFit: 'contain', maxHeight: '450px'}}
          />
          <div style={{ marginBottom: '10px' }}></div>
          <a href='/' >Quay về trang chủ</a>
        </div>
      </div>
    </div>
  );
};

export default TienIch;
