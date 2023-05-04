import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/img/logo-white.png";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter">
            <Link
              className="flexCenter animate pointer"
              style={{
                maxHeight: 100,
              }}
              to="home"
              smooth={true}
              offset={-80}
            >
              <img src={LogoImg} alt="AZ Tech" style={{ maxHeight: 100 }} />
              <h1
                className="font15 extraBold whiteColor"
                style={{ marginLeft: "15px" }}
              >
                AZ TECH
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} -{" "}
              <span className="purpleColor font13">AZ TECH</span> All Right
              Reserved
            </StyleP>

            <Link
              className="whiteColor animate pointer font13"
              to="home"
              smooth={true}
              offset={-80}
            >
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
