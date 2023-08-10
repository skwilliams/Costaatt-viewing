import footerStyles from "../styles/Footer.module.scss";
import { footerLinks } from "../components/NavComponents/menuLinks";

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
import MenuItems from "./NavComponents/MenuItems";

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.mainFooter}>
        <div className={footerStyles.contact}>
          <div>
            College of Science, Technology and <br />
            Applied Arts of Trinidad and Tobago
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
            Email:{" "}
            <a href="mailto:info@costaatt.edu.tt">info@costaatt.edu.tt</a>
          </p>
        </div>

        <div className={footerStyles.siteMap}>
          <h3>Quick Links</h3>
          <div className={footerStyles.quickLinks}>
            {footerLinks.map((menu, index) => (
              <div key={index}>
                <MenuItems items={menu} />
              </div>
            ))}
          </div>
        </div>

        <div className={footerStyles.socials}>
          <div>Stay up to date with our latest news</div>
          <div className={footerStyles.button}>
            <Link href="/">Join</Link>
          </div>
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
      <div className={footerStyles.copyRight}>&copy; COSTAATT | 2023</div>
    </div>
  );
};

export default Footer;
