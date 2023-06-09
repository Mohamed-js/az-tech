import React, {useEffect} from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/landing1.jpeg";
import AddImage2 from "../../assets/img/landing2.jpg";
import AddImage3 from "../../assets/img/landing3.png";
import AddImage4 from "../../assets/img/landing4.jpg";
import AddImage5 from "../../assets/img/bright.webp";

// AOS library
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}
        
      >
        <div className="container">
          <HeaderInfo >
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
              Our team is made up of experienced professionals with a diverse
              range of backgrounds and expertise. <br /> From front-end
              development to back-end programming, from UX design to content
              strategy, <br /> we have the skills and knowledge to handle any
              challenge that comes our way.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex" >
            <ServiceBoxWrapper data-aos= "fade-up">
              <ServiceBox
                icon="monitor"
                title="Web Design & Development"
                subtitle="Our team of experienced designers and developers can create beautiful, functional websites that help you stand out from the competition. We use the latest design trends and technologies to create custom solutions that reflect your brand and engage your audience."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper data-aos= "fade-up">
              <ServiceBox
                icon="browser"
                title="E-Commerce Solutions"
                subtitle="From small online stores to large e-commerce platforms, we have the expertise to build and optimize your e-commerce website. We can help you streamline your checkout process, manage your inventory, and increase your sales with targeted marketing strategies."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper data-aos= "fade-up"> 
              <ServiceBox
                icon="roller"
                title="Graphic Design"
                subtitle="Our team of skilled graphic designers can help you create stunning visual designs that reflect your brand and engage your audience. From logos and branding to marketing materials and social media graphics, we can help you create a cohesive visual identity that sets you apart from the competition."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper data-aos= "fade-up">
              <ServiceBox
                icon="mobile"
                title="Mobile Development"
                subtitle="In today's mobile-first world, having a mobile app can help you reach and engage with your audience in new and powerful ways. Our experienced mobile app developers can help you create custom mobile apps that are tailored to your specific business needs. We use the latest technologies to ensure that your app is fast, reliable, and user-friendly."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">A few words about us</h4>
                <h2 className="font40 extraBold">Tech from A to Z</h2>
                <p className="font12">
                  At AZ Tech , we're not just building websites and
                  applications, we're building <strong>relationships</strong>.{" "}
                  <br />
                  Contact us today to learn more about how we can help you
                  achieve your online goals.
                </p>
                <ButtonsRow
                  className="flexNullCenter"
                  style={{ margin: "30px 0" }}
                >
                  <div style={{ width: "190px" }}>
                    <FullButton
                      title="Get Started"
                      action={() => alert("clicked")}
                    />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton
                      title="Contact Us"
                      action={() => alert("clicked")}
                      border
                    />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage5} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp3>
                    {/* <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4> */}
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 90%;
  margin-left: 50%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
