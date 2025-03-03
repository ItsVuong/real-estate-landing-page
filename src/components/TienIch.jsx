import React from "react";

export const TienIch = (props) => {
  return (
    <div id="tien-ich" className="text-center"
    style={{paddingTop: '100px'}}>
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>TIỆN ÍCH VINHOMES WONDER PARK</h2>
          <p>
            NÂNG TẦM CHẤT LƯỢNG SỐNG
          </p>
        </div>
        <div id="row">
          <div className="col-md-4 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src='img/vinschool.jpg' alt="..." className="team-img"
                style={{ width: '100%' }}
              />
              <div className="caption">
                <h4>Vinschool
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src='img/vinmec.jpg' alt="..." className="team-img"
                style={{ width: '100%' }}
              />
              <div className="caption">
                <h4>Vinmec
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src='img/masterrise.jpg' alt="..." className="team-img"
                style={{ width: '100%' }}
              />
              <div className="caption">
                <h4>2 tòa Masterise
                </h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src='img/office.jpg' alt="..." className="team-img"
                style={{ width: '100%' }}
              />
              <div className="caption">
                <h4>2 tòa văn phòng 35 tầng
                </h4>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src='img/vincom.png' alt="..." className="team-img"
                style={{ width: '100%' }}
              />
              <div className="caption">
                <h4>Trung tâm thương mại
                </h4>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src='img/tien-ich-cong-vien.jpg' alt="..." className="team-img"
                style={{ width: '100%' }}
              />
              <div className="caption">
                <h4>4 công viên
                </h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
