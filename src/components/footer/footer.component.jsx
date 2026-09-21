import { FooterContainer, IconsContainer } from "./footer.styles";
import { FaFacebookF } from "react-icons/fa";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { PiTelegramLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <FooterContainer>
      {/* <h3>Hello Motherfuckers</h3> */}
      <div></div>
      <div></div>
      <IconsContainer>
        <a href="https://www.google.com">
          <PiTelegramLogoLight color="white" />
        </a>
        <a href="https://www.google.com">
          <FaFacebookF color="white" />
        </a>
        <a href="https://www.google.com">
          <CiInstagram color="white" />
        </a>
      </IconsContainer>
    </FooterContainer>
  );
};

export default Footer;
