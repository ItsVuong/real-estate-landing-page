import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }

    emailjs
      .sendForm("service_ibkugag", "template_9zjk23h", e.target, "hQpMn74dRphk7R4pk")
      .then(
        () => {
          clearState();
          toast.success("Thông tin đã được ghi nhận!");
        },
        (error) => {
          toast.success("Xin vui lòng thử lại sau hoặc liên hệ trực tiếp.");
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="">
                <h3>
                  ĐỂ LẠI THÔNG TIN LIÊN LẠC ĐỂ CÓ THỂ NHẬN HỖ TRỢ!
                </h3>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Tên"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="SĐT"
                    required
                    onChange={handleChange}
                  ></input>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Gửi thông tin
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
        <ToastContainer position="bottom-left" />
    </div>
  );
};
