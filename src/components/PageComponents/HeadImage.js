import Image from "next/image";
import headerStyles from "../../styles/HeaderStyles.module.scss";

const HeadImage = ({ imagetext, mainimage, wide, high }) => {
  return (
    <div className={headerStyles.headerContainer}>
      <Image
        src={mainimage}
        // className={headerStyles.headerContainer__img}
        alt={imagetext}
        priority={true}
        // sizes="100vw"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ width: "100%", height: "100%" }}
        quality="100"
   
        width={2024}
        height={700}
        // fill
        onLoad={(e) => console.log(e)} // {naturalHeight: ..., naturalWidth: ...}
      />
      {/* <div className={style.pageheadertext}>{imagetext}</div> */}
    </div>
  );
};

export default HeadImage;
