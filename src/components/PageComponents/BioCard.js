import React from "react";
import standardStyles from "../../styles/main.module.scss";
import Image from "next/image";

const BioCard = ({ staff, dept }) => {
  return (
    <>
      {staff
        .filter((member) => member.dept_code === dept)
        .map((fe) => (
          <>
            <div className={standardStyles.row}>
              <div className={standardStyles.story}>
                <figure className={standardStyles.story__shape}>
                  {fe.photo && fe.altText && (
                    <Image
                      src={fe.photo}
                      alt={fe.altText}
                      className={standardStyles.story__img}
                    />
                  )}
                  <figcaption className={standardStyles.story__caption}>
                    {fe.name}
                  </figcaption>
                </figure>
                <div className={standardStyles.story__text}>
                  <h3
                    className={`${standardStyles.headingTertiary} ${standardStyles.marginBottomSmall}`}
                  >
                    {fe.position}
                  </h3>
                  <p className={standardStyles.story__cut}>{fe.bio}</p>
                </div>
              </div>
              {/* <div className={standardStyles.popup} id="popup">
                <div className={standardStyles.popup__content}>
                  <div className={standardStyles.popup__left}>
                    <Image
                      src={fe.photo}
                      alt={fe.altText}
                      className={standardStyles.popup__img}
                    />
                  </div>
                  <div className={standardStyles.popup__right}>
                    <h2 className={standardStyles.headingSecondary}>
                      {fe.position}
                    </h2>
                    <h3
                      className={`${standardStyles.headingSecondary} ${standardStyles.marginBottomSmall}`}
                    >
                      {fe.name}{" "}
                    
                    </h3>
                    <p className={standardStyles.popup__text}>{fe.bio}</p>
                  </div>
                </div>
              </div> */}
            </div>
          </>
        ))}
    </>
  );
};

export default BioCard;
