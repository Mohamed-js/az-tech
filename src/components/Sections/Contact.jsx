import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import { MdGppGood } from "react-icons/md";

import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact.avif";
import ContactImg2 from "../../assets/img/get-touch2.jpg";
import ContactImg3 from "../../assets/img/get-touch3.png";

export default function Contact() {
  let form = useRef();
  function sendEmail(e) {
    e.preventDefault();  

    emailjs
      .sendForm(
        "service_zd91oua",
        "template_8c6wujg",
        e.target,
        "vPGMP-F5OhsafzvAP"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            document.querySelector(".successfully-sent").style.display =
              "inline-flex";
            setTimeout(function () {
              return (document.querySelector(
                ".successfully-sent"
              ).style.display = "none");
            }, 5000);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              We would love to hear from you! If you have any questions or
              comments about our products or services, <br /> please don't
              hesitate to contact us using the form below. <br /> We'll get back
              to you as soon as possible.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form ref={form} onSubmit={sendEmail} id="send-email">
                <label className="font13">First name:</label>
                <input
                  name="name"
                  type="text"
                  id="fname"
                  className="font20 extraBold"
                />
                <label className="font13">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="font20 extraBold"
                />
                <label className="font13">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="font20 extraBold"
                />
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  className="font20 extraBold"
                />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput
                  type="submit"
                  value="Send Message"
                  className="pointer animate radius8"
                  style={{ maxWidth: "220px" }}
                  form="send-email"
                />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex justify-content-center">
              <div>
                <img
                  src={ContactImg1}
                  alt="office"
                  className="radius6"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="successfully-sent">
      Your Message Has Been Sent <MdGppGood className="correct" />
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 300px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
