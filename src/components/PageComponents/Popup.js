import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import standardStyles from "../../styles/main.module.scss";

import Link from "next/link";

const Popup = (show, onClose, children) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={standardStyles.overlay}>
      <div className={standardStyles.modal}>
        <div className={standardStyles.header}>
          <a
            href="/accreditation"
            onClick={handleClose}
            className={standardStyles.popup__close}
          >
            x
          </a>
          {/* <h2
              className={`${standardStyles.headingprimary} ${standardStyles.marginBottomSmall}`}
            >
              Contact
            </h2>
            <h3
              className={`${standardStyles.headingprimary} ${standardStyles.marginBottomSmall}`}
            >
              Important -Please read these terms before booking
            </h3>
            <p className={standardStyles.popup__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              sed risus pretium quam. Aliquam sem et tortor consequat id.
              Volutpat odio facilisis mauris sit amet massa vitae. Mi bibendum
              neque egestas congue. Placerat orci nulla pellentesque dignissim
              enim sit. Vitae semper quis lectus nulla at volutpat diam ut
              venenatis. Malesuada pellentesque elit eget gravida cum sociis
              natoque penatibus et. Proin fermentum leo vel orci porta non
              pulvinar neque laoreet. Gravida neque convallis a cras semper.
              Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
              vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam
              libero justo laoreet sit. Amet massa vitae tortor condimentum
              lacinia quis vel eros donec. Sit amet facilisis magna etiam.
              Imperdiet sed euismod nisi porta.
            </p>
            <a
              href="#"
              className={`${standardStyles.btn} ${standardStyles.btn__white}`}
            >
              Book now
            </a> */}
        </div>
        <div className={standardStyles.body}>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modalroot")
    );
  } else {
    return null;
  }
};

export default Popup;
