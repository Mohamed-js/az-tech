import React, { useEffect } from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/bright.webp";

// AOS Library
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Projects</h1>
            <p className="font13">
              Our team of experienced professionals is passionate about pushing
              the boundaries of what's possible and finding creative solutions
              to complex problems.
              <br />
              We're always looking for ways to improve and refine our processes
              to ensure we're delivering the highest quality work.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div
              className="col-xs-12 col-sm-4 col-md-4 col-lg-4"
              data-aos="fade-right"
            >
              <ProjectBox
                img={ProjectImg1}
                title="Cashier"
                text="A web-based cashier app. It enables users to store and track their sales and give them some statistics and charts about their performance."
                // action={() => alert("clicked")}
                href={"https://mohamed-zakaria-coder.github.io/Cashier/"}
              />
            </div>
            <div
              className="col-xs-12 col-sm-4 col-md-4 col-lg-4"
              data-aos="zoom-in"
            >
              <ProjectBox
                img={ProjectImg2}
                title="Dashboard"
                text="A Multi Page Application Dashboard Made By Html And CSS, It Contains 9 Pages."
                // action={() => alert("clicked")}
                href={"https://mohamed-zakaria-coder.github.io/dashboard/"}
              />
            </div>
            <div
              className="col-xs-12 col-sm-4 col-md-4 col-lg-4"
              data-aos="fade-left"
            >
              <ProjectBox
                img={ProjectImg3}
                title="Landing-Page"
                text="A Store For Selling The Best Hair Products For The Health Of Your Hair And It Provides Natural Products"
                // action={() => alert("clicked")}
                href={"https://mohamed-zakaria-coder.github.io/landing-page/"}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div
              className="col-xs-12 col-sm-4 col-md-4 col-lg-4"
              data-aos="fade-right"
            >
              <ProjectBox
                img={ProjectImg4}
                title="SellEx"
                text="A great solution to manage sales, stocks, online, and offline orders."
                // action={() => alert("clicked")}
                href={"https://sellex-store.onrender.com/"}
              />
            </div>
            <div
              className="col-xs-12 col-sm-4 col-md-4 col-lg-4"
              data-aos="zoom-in"
            >
              <ProjectBox
                img={ProjectImg5}
                title="Agz5anty Pharmacy"
                text="A pharmacy delivery mobile app to deliver medications and cosmetics."
                // action={() => alert("clicked")}
                href={"https://mohamed-js.github.io/agz5anty-landing/"}
              />
            </div>
            <div
              className="col-xs-12 col-sm-4 col-md-4 col-lg-4"
              data-aos="fade-left"
            >
              <ProjectBox
                img={ProjectImg6}
                title="Store"
                text="A Single Page Application Store For Selling Products Online."
                // action={() => alert("clicked")}
                href={"https://sellex-store.vercel.app/otaku"}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">
                "Creativity is intelligence having fun." - Albert Einstein
              </h4>
              <h2 className="font40 extraBold">A Study of Creativity</h2>
              <p className="font12">
                At AZ Tech, we believe that creativity is a vital component of
                success in any field. That's why we strive to foster a creative
                and collaborative environment in everything we do, from product
                design to customer service. We're constantly exploring new ideas
                and pushing boundaries to find innovative solutions to the
                challenges our customers face.
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
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
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
  position: relative;
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
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
