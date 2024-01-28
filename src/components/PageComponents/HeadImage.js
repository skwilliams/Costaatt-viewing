import Image from "next/image";
import style from "../../styles/Programmes.module.scss";

const HeadImage = ({ imagetext, mainimage }) => {
  return (
    <div className={style.pageheader}>
 
        <Image
          src={mainimage}
          className={style.pageheaderimg}
          width="0"
          height="0"
          alt={imagetext}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ width: "100%", height: "50%" }}
          quality="100"
          onLoad={(e) => console.log(e)} // {naturalHeight: ..., naturalWidth: ...}
        />
    
      <div className={style.pageheadertext}>{imagetext}</div>
    </div>
  );
};

export default HeadImage;
