import { useState } from "react";

const faqData = [
  {
    title: "CHỦ ĐẦU TƯ UY TÍN",
    content: [
      { answer: "Được xây dựng và phát triển bởi tập đoàn VinGroup, thương hiệu CĐT bất động sản Top1 tại Việt Nam, với hàng loạt các dự án đã cung cấp ra thị trường trong suốt thời gian qua." },
    ]
  },
  {
    title: "ƯU THẾ TỪ VỊ TRÍ ĐỊA LÝ",
    content: [{ answer: 'Toạ lạc tại cửa ngõ Tây Bắc thủ đô với hệ thống cơ sở hạ tầng được quy hoạch đồng bộ và hiện đại, tiếp giáp các tuyến đường giao thông huyết mạch kết nối với trung tâm Hà Nội và các quận huyện lân cận.' }]
  },
  {
    title: "ƯU THẾ QUY HOẠCH TƯƠNG LAI",
    content: [{ answer: 'Huyện Đan Phượng là một trong những quận có vị trí chiến lược quan trọng được UBND thành phố phê duyệt đề xuất lên quận vào năm 2025, với quy hoạch xây dựng các khu đô thị sinh thái gắn liền với các dịch vụ chất lượng cao về y tế và giáo dục.' }]
  },
  {
    title: "CƠ SỞ HẠ TẦNG ĐỒNG BỘ",
    content: [{ answer: 'Đại lộ Tây Thăng Long có mặt cắt ngang rộng 60,5m với 10 làn xe nối từ trung tâm thành phố Hà Nội tới trung tâm thị xã Sơn Tây (TP.Hà Nội) đi qua địa phận của quận Bắc Từ Liêm, huyện Đan Phượng, huyện Phúc Thọ và lên tới trung tâm Sơn Tây.' }]
  },
  {
    title: "ƯU THẾ THỊ TRƯỜNG",
    content: [{ answer: 'Đại lộ Tây Thăng Long có mặt cắt ngang rộng 60,5m với 10 làn xe nối từ trung tâm thành phố Hà Nội tới trung tâm thị xã Sơn Tây (TP.Hà Nội) đi qua địa phận của quận Bắc Từ Liêm, huyện Đan Phượng, huyện Phúc Thọ và lên tới trung tâm Sơn Tây.' }]
  },
];

export default function UuDiem() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-4"
    style={{marginBottom: '50px', maxWidth: '1000px'}}>
      <div className="col-md-8 col-md-offset-2 section-title"
        style={{ textAlign: 'center', marginTop: '50px', marginBottom: '26px' }}>
        <h2>CÁC ƯU ĐIỂM</h2>
      </div>
      <div className="accordion" id="faqAccordion">
        {faqData.map((section, index) => (
          <div className="accordion-item" key={index}
          >
            <h2 className="accordion-header"
              style={{ borderBottom: '1px solid black', padding: '1rem 0', 
                fontSize: '28px',
              }}
            >
              <button
                className={`accordion-button ${openIndex === index ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleSection(index)}
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={openIndex === index ? "true" : "false"}
                aria-controls={`collapse${index}`}
                style={{ backgroundColor: 'white', border: 'none' }}
              >
                {section.title}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {section.content.length > 0 ? (
                  section.content.map((item, idx) => (
                    <div key={idx}>
                      <p style={{ fontSize: '20px', marginBottom: '18px'}}>{item.answer}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-muted">No information available.</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

