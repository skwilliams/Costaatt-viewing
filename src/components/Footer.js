import footerStyles from "../styles/Footer.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialInstagram,
} from "react-icons/ti";

import Link from "next/link";

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.mainFooter}>
        <div className={footerStyles.contact}>
          <div>
            College of Science and Applied <br /> Arts of Trinidad and Tobago
          </div>
          <p>Main Campus</p>
          <p>Pierre Road Connector</p>
          <p>Chaguanas</p>
          <p>
            <span>
              <BsFillTelephoneFill />
            </span>{" "}
            Tel: 1-868-625-5030
          </p>
          <p>
            <span>
              <MdEmail />
            </span>{" "}
            Email: info@costaatt.edu.tt
          </p>
        </div>

        <div className={footerStyles.uptoDate}>
          <div>Stay up to date with our latest news</div>
          <div className={footerStyles.button}>
            <Link href="/">Join</Link>
          </div>
        </div>

        <div className={footerStyles.socials}>
          <div>Follow us on social media</div>
          <div className={footerStyles.socialsIcons}>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className={footerStyles.copyRight}>&copy; Costaatt | 2023</div>
    </div>
  );
};

export default Footer;
