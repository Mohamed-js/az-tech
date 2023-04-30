import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/graphic.webp";
import MonitorIcon from "../../assets/svg/Services/pngegg (1).png";
import BrowserIcon from "../../assets/svg/Services/pngegg (2).png";
import MobileIcon from "../../assets/svg/Services/mobile.jpg";

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = RollerIcon;
      break;
    case "monitor":
      getIcon = MonitorIcon;
      break;
    case "browser":
      getIcon = BrowserIcon;
      break;
    case "mobile":
      getIcon = MobileIcon;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      <img
        src={getIcon}
        alt="Mobile"
        style={{
          height: "85px",
          objectFit: "contain",
        }}
      />

      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
  @media (width > 800px) {
    height: 125px;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
