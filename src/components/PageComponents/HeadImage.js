import Image from "next/image";
import headerStyles from "../../styles/HeaderStyles.module.scss";

const HeadImage = ({ imagetext, mainimage }) => {
  return (
    <div className={headerStyles.headerContainer}>
      <Image
        src={mainimage}
        className={headerStyles.headerContainer__img}
        alt={imagetext}
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ width: "100%", height: "50%" }}
        quality="100"
        width={5176}
        height={1337}
      
        onLoad={(e) => console.log(e)} // {naturalHeight: ..., naturalWidth: ...}
      />
      {/* <div className={style.pageheadertext}>{imagetext}</div> */}
    </div>
  );
};

export default HeadImage;
