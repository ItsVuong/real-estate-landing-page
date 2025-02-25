import React, { useState, useEffect } from "react";

const BaoMat = () => {
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
          <h2>Chính sách bảo mật & Bảo vệ thông tin cá nhân người tiêu dùng</h2>
          <p>
          </p>
          <p>
            Chúng tôi luôn đề cao tính trung thực, minh bạch và cam kết bảo mật những dữ liệu cá nhân của khách hàng. Xin vui lòng đọc bản Chính sách bảo mật dưới đây để hiểu hơn những cam kết mà chúng tôi thực hiện nhằm tôn trọng và bảo vệ quyền lợi của khách hàng. Chính sách bảo mật này sẽ điều chỉnh và giải thích cách chúng tôi tiếp nhận, sử dụng và (trong một số trường hợp nhất định) tiết lộ, chuyển giao hoặc chia sẻ dữ liệu cá nhân của khách hàng. Chính sách bảo mật này cũng quy định rõ các bước chúng tôi phải thực hiện để bảo mật dữ liệu cá nhân của khách hàng. Cuối cùng, Chính sách bảo mật sẽ giải thích quyền lựa chọn của khách hàng về việc thu thập, sử dụng và tiết lộ dữ liệu cá nhân của mình.
          </p>

          <p>
            Bằng việc đăng ký dữ liệu cá nhân để sử dụng website, đồng nghĩa là khách hàng đã thừa nhận, đồng ý tuân thủ và tin tưởng vào chính sách bảo mật này. Vinhomes wonder city đề nghị khách hàng nên xem trước nội dung “Chính sách bảo mật” dưới đây trước khi truy cập các nội dung khác trên website.
          </p>
          <h3>1- Vinhomes wonder city</h3>
          <div className="divide"></div>
          <p>
            Vinhomes wonder city chịu trách nhiệm về các dữ liệu mà khách hàng chia sẻ. Khi chúng tôi đề cập tới “Vinhomes wonder city”, “Chúng tôi” nghĩa là đang đề cập tới “Bên kiểm soát dữ liệu” và tuân thủ theo các văn bản pháp luật hiện hành về bảo vệ dữ liệu cho người tiêu dùng.
          </p>

          <h3>2- Thu thập dữ liệu cá nhân</h3>
          <div className="divide"></div>
          <p>
            Vinhomes wonder city sử dụng thông tin thu thập từ khách vãng lai và khách đã đăng ký là thành viên trên hệ thống website Vinhomes wonder city để phát triển website ngày càng phong phú hơn, phù hợp với nhu cầu mua sắm của quý khách hơn. Chúng tôi thu thập các loại thông tin sau:
          </p>
          <p>
            – <strong>Thông tin Quý khác cung cấp cho chúng tôi:</strong> Chúng tôi thu thập thông tin cá nhân được cung cấp bởi người sử dụng trang web. “Thông tin cá nhân” bao gồm tên, địa chỉ, số điện thoại, thông tin thẻ tín dụng hoặc thẻ ghi nợ, địa chỉ email, ngày sinh, địa chỉ IP… thông qua phần mềm Insider và Kiotviet.
          </p>

          <p>
            – <strong>Cookies:</strong> Thông qua việc sử dụng Cookies, chúng tôi thu thập và phân tích địa chỉ IP được sử dụng để nối kết máy tính của quý khách với internet, máy tính và thông tin kết nối như trình duyệt và phiên bản trình duyệt, hệ điều hành, lịch sử mua hàng, xác nhận khi quý khách mở email mà chúng tôi gửi cho quý khách, ngày giờ và các URL đưa đến với website chúng tôi. Cookie không thể truy cập hoặc phân lượng dữ liệu trong ổ cứng máy tính của quý khách. Thông thường quý khách có thể thiết lập trình duyệt để vô hiệu hóa cookie hay thông báo cho quý khách biết khi được gửi cookie.Hiện nay trên thị trường cũng có sẵn các phần mềm cho phép quý khách truy cập vào trang web mà không cần cung cấp thông tin này. Quý khách vẫn được chào đón để ghé thăm hệ thống website Vinhomes wonder city khi quý khách sử dụng phần mềm như vậy, nhưng chúng tôi sẽ không thể cung cấp cho quý khách dịch vụ phù hợp với quý khách và chúng tôi cũng có quyền từ chối đơn đặt hàng trực tuyến từ quý khách khi có nghi ngờ vi phạm bảo mật của chúng tôi.
          </p>
          <p>
            – <strong>Đặt hàng:</strong> Nếu quý khách thực hiện mua hàng trực tuyến tại hệ thống website Vinhomes wonder city, quý khách sẽ được yêu cầu cung cấp thông tin liên lạc, phương thức thanh toán, thông tin thanh toán và địa chỉ giao hàng. Quý khách vui lòng cung cấp thông tin đúng và đầy đủ để thực hiện xử lý đơn hàng. Nếu có một người nào bên ngoài lợi dụng các thông tin này dẫn đến những sai sót khi giao hàng, chúng tôi sẽ thực hiện điều tra và xử lý. Nếu lỗi do quý khách bị lộ thông tin quý khách phải chịu hoàn toàn trách nhiệm.
          </p>
          <p>
            – <strong>Đăng ký nhận bản tin Khuyến mại:</strong> Khi quý khách thực hiện mua hàng tại website Vinhomes wonder city, quý khách sẽ nhận được những bản tin khuyến mại của Vinhomes wonder city, trừ khi quý khách từ chối thông tin này nếu không muốn. Nếu quý khách yêu cầu đăng ký nhận tin qua email, chúng tôi sẽ gửi quý khách một email xác nhận yêu cầu của quý khách. Nếu quý khách thay đổi và quyết định không tham gia vào danh sách nhận tin, quý khách có thể từ chối ngay trong email đó. Hơn nữa, email xác nhận sẽ báo cho quý khách biết nếu có người nào khác đã sử dụng địa chỉ email của quý khách để đăng ký nhận tin của chúng tôi. Để chắc rằng việc gửi tin qua email là hữu ích cho quý khách, vui lòng xác nhận khi quý khách nhận được email  từ chúng tôi.
          </p>

          <h3>
            3- Mục đích và phạm vi sử dụng dữ liệu cá nhân
          </h3>
          <div className="divide"></div>
          <p>
            Tùy thuộc vào mối quan hệ của bạn với chúng tôi, các dữ liệu cá nhân mà chúng tôi thu thập từ bạn có thể được thu thập, sử dụng và tiết lộ cho các mục đích sau:
          </p>
          <p>
            <ul>
              <li>
                <strong>(a)</strong> để xác minh danh tính của bạn và để quản lý tài khoản trực tuyến mà bạn có thể đã thiết lập với chúng tôi;
              </li>
              <li>
                <strong>(b)</strong> để tạo điều kiện cho việc bạn sử dụng các dịch vụ hoặc truy cập vào trang web này;
              </li>
              <li>
                <strong>(c)</strong> để xử lý các đơn đặt hàng bạn gửi qua trang web (bao gồm bất kỳ khoản thanh toán nào bạn thực hiện thông qua trang web đối với các sản phẩm, dù do chúng tôi hay bất kỳ chi nhánh nào của chúng tôi bán);
              </li>
              <li>
                <strong>(d)</strong> để xác minh và thực hiện các giao dịch tài chính được thực hiện trực tuyến liên quan đến thanh toán, và để xác định danh tính của bạn cho việc chống rửa tiền, báo cáo giao dịch đáng ngờ và các mục đích phát hiện gian lận;
              </li>
              <li>
                <strong>(e)</strong> để cung cấp các sản phẩm mà bạn đã mua thông qua trang web này, cho dù được bán bởi chúng tôi hoặc người bán là bên thứ ba, và để xác minh việc giao sản phẩm. Chúng tôi có thể chuyển dữ liệu cá nhân của bạn cho bên thứ ba để giao sản phẩm cho bạn (ví dụ: chuyển phát nhanh hoặc nhà cung cấp sản phẩm của chúng tôi);
              </li>
              <li>
                <strong>(f)</strong> liên lạc với bạn để xử lý và trả lời các truy vấn, phản hồi, khiếu nại hoặc tranh chấp của bạn, cho dù trực tiếp hoặc thông qua bất kỳ nhà cung cấp dịch vụ khách hàng được thuê ở bên ngoài nào;
              </li>
              <li>
                <strong>(g)</strong> để thông báo cho bạn các thương hiệu, sản phẩm, chương trình khuyến mãi của chúng tôi và mời bạn đến các sự kiện sắp tới của Vinhomes wonder city hoặc các mục đích khuyến mại khác;
              </li>
              <li>
                <strong>(h)</strong> để cập nhật cho bạn về bất kỳ sản phẩm và dịch vụ nào của chúng tôi cũng như những phát triển mới nhất tại Vinhomes wonder city, cho dù trực tiếp hoặc thông qua bất kỳ nhà cung cấp dịch vụ khách hàng được thuê ở bên ngoài nào;
              </li>
              <li>
                <strong>(i)</strong> để gửi cho bạn tài liệu quảng cáo / khuyến mại từ bất kỳ chi nhánh nào của chúng tôi, cho dù trực tiếp hoặc thông qua bất kỳ đối tác quảng cáo và chiến lược nào của chúng tôi;
              </li>
              <li>
                <strong>(j)</strong> để cải thiện trang web này; để cải thiện các dịch vụ và sản phẩm được bán;
              </li>
              <li>
                <strong>(k)</strong> thực hiện nghiên cứu thị trường về nhân khẩu học, sở thích và quảng cáo hoặc mua hàng và các hành vi khác của người dùng;
              </li>
              <li>
                <strong>(l)</strong> để cung cấp cho bạn thông tin mà chúng tôi cho rằng bạn có thể thấy hữu ích hoặc bạn đã yêu cầu từ chúng tôi, bao gồm thông tin về các sản phẩm và dịch vụ của chúng tôi hoặc của chi nhánh của chúng tôi, miễn là bạn không thể hiện sự phản đối khi được liên lạc cho các mục đích đó;
              </li>
              <li>
                <strong>(m)</strong> tuân thủ mệnh lệnh của tòa án hoặc quy trình pháp lý khác hoặc các yêu cầu pháp lý và / hoặc quy định khác của bất kỳ cơ quan chính phủ và / hoặc cơ quan quản lý nào; và  bất kỳ mục đích nào được mô tả cho bạn tại thời điểm thu thập dữ liệu cá nhân của bạn.
                <p>
                  Chúng tôi có thể công bố cho bên thứ ba như đại lý, các nhà cung cấp có liên quan khác nhằm đáp ứng dịch vụ tốt nhất cho khách hàng. Vinhomes wonder city cam kết các nhân viên, cán bộ, đại lý, bộ phận tư vấn hoặc bên thứ ba được đề cập ở trên có liên quan tới việc thu thập, xử lý và lưu giữ thông tin khách hàng sẽ nắm chắc và tuân thủ tuyệt đối Chính sách bảo mật này.
                </p>
              </li>
            </ul>
          </p>
          <h3>
            4- Sử dụng Cookie
          </h3>
          <div className="divide"></div>
          <p>
            Cookie là tập tin văn bản nhỏ có thể nhận dạng tên truy cập duy nhất từ máy tính của bạn đến máy chủ của chúng tôi, khi bạn truy cập vào các trang nhất định và được lưu bởi trình duyệt Internet lên ổ cứng máy tính. Cookie được dùng để nhận dạng địa chỉ IP, lưu lại thời gian, giúp khách hàng tiện theo dõi trang web (ví dụ: ghi nhớ tên truy cập khi bạn muốn vào thay đổi lại giỏ mua hàng mà không cần phải nhập lại địa chỉ email của mình) mà không đòi hỏi bất kỳ thông tin nào khác.
          </p>
          <h3>
            5- Thời gian lưu trữ dữ liệu
          </h3>
          <div className="divide"></div>
          <p>
            Vinhomes wonder city lưu trữ dữ liệu cá nhân do khách hàng cung cấp trên hệ thống nội bộ. Thời gian lưu trữ phụ thuộc vào quá trình cung cấp dịch vụ, có thể là đến khi đã hoàn thành mục đích thu thập hoặc khách hàng có phản hồi yêu cầu hủy các dữ liệu cá nhân đã chia sẻ trước đó.
          </p>
          <h3>
            6- Phương tiện để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân
          </h3>
          <div className="divide"></div>
          <p>
            Trường hợp khách hàng muốn chỉnh sửa dữ liệu cá nhân của mình hoặc thực hiện các quyền khác của chủ thể dữ liệu, vui lòng thể liên hệ trực tiếp với Bộ phận Chăm sóc khách hàng của Vinhomes wonder city qua các phương tiện:
          </p>
          <h3>
            7- Hậu quả, thiệt hại không mong muốn có khả năng xảy ra với dữ liệu cá nhân của khách hàng
          </h3>
          <div className="divide"></div>
          <p>
            Trong quá trình thu thập và xử lý dữ liệu cá nhân của khách hàng, có thể có những sự cố và thiệt hại không mong muốn nhưng có khả năng xảy ra như:
          </p>
          <p>
            Các sự kiện bất khả kháng như thiên tai, động đất, hỏa hoạn, tấn công khủng bố dẫn đến sự cố hư hỏng, thiệt hại phần cứng của hệ thống lưu trữ và xử lý dữ liệu của chúng tôi;
          </p>
          <p>
            Các cuộc tấn công với mục đích truy cập và chiếm đoạt trái phép dữ liệu lưu trữ trên hệ thống của chúng tôi.
          </p>
          <p>
            Để hạn chế và phòng tránh các hậu quả, thiệt hại này, Vinhomes wonder city tiến hành các biện pháp thích hợp về kỹ thuật và an ninh như cam kết tại Mục 7 dưới đây.
          </p>

          <h3>
            8- Cam kết bảo mật dữ liệu khách hàng
          </h3>
          <div className="divide"></div>
          <p>
            Chúng tôi có biện pháp thích hợp về kỹ thuật và an ninh để ngăn chặn truy cập trái phép hoặc trái pháp luật hoặc mất mát hoặc tiêu hủy hoặc thiệt hại cho dữ liệu của khách hàng. Đồng thời, chúng tôi duy trì các biện pháp bảo vệ vật lý và điện tử trong mối liên kết với thu thập, lưu trữ và tiết lộ thông tin của khách hàng. Các thủ tục an toàn của chúng tôi nghĩa là chúng tôi có thể là đôi khi yêu cầu giấy tờ chứng minh trước khi tiết lộ dữ liệu cá nhân.
          </p>
          <p>
            Mọi thông tin, giao dịch sẽ được bảo mật nhưng trong trường hợp cơ quan pháp luật yêu cầu, chúng tôi sẽ buộc phải cung cấp những thông tin này cho các cơ quan pháp luật.
          </p>
          <p>
            Chúng tôi có thể chia sẻ, chuyển giao dữ liệu cá nhân của bạn với các bên thứ ba, các chi nhánh, đơn vị thành viên của chúng tôi cho bất kỳ mục đích nào đã nêu ở trên, hoặc tạo điều kiện thuận lợi cho việc khách hàng sử dụng Trang web này hoặc bất kỳ dịch vụ nào do chúng tôi cung cấp, hoàn thành giao dịch với bạn, quản lý tài khoản của bạn và mối quan hệ của chúng tôi với khách hàng, tiếp thị và đáp ứng bất kỳ yêu cầu pháp lý hoặc quy định và yêu cầu nào mà chúng tôi cho là cần thiết.
          </p>
          <p>
            Chúng tôi có thể chia sẻ, chuyển giao dữ liệu cá nhân của bạn cho bên thứ ba khác trong trường hợp có sự chuyển giao mảng kinh doanh của chúng tôi cho đơn vị, chủ thể khác với điều kiện là đơn vị, chủ thể tiếp nhận sẽ tiếp tục sử dụng dữ liệu cá nhân của bạn theo các mục đích đã cam kết bảo mật đã được nêu trên. Trong trường hợp này, Vinhomes wonder city sẽ không cần gửi thông báo hay được khách hàng chấp thuận để thực hiện.
          </p>
          <p>
            Trong việc chia sẻ, chuyển giao dữ liệu cá nhân của bạn với bên ngoài, chúng tôi nỗ lực để đảm bảo rằng các bên thứ ba, những chi nhánh và đơn vị thành viên của chúng tôi bảo vệ dữ liệu cá nhân của bạn an toàn khỏi những truy cập, thu thập, sử dụng, tiết lộ, xử lý trái phép hoặc rủi ro tương tự và chỉ duy trì dữ liệu cá nhân của bạn khi lấy dữ liệu cá nhân của bạn để thực hiện các mục đích đã được nêu trên.
          </p>

          <h3>
            9- Xóa dữ liệu cá nhân trên website
          </h3>
          <div className="divide"></div>
          <p>
            Trường hợp bạn muốn xóa hoàn toàn dữ liệu cá nhân của bạn trên website, bạn cần liên hệ trực tiếp với bộ phần chăm sóc khách hàng của Vinhomes wonder city theo các cách sau
          </p>
          <h3>
            10- Địa chỉ đơn vị thu thập và quản lý dữ liệu cá nhân
          </h3>
          <div className="divide"></div>
          <p>
            Công ty TNHH Vinhomes wonder city
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

export default BaoMat;
