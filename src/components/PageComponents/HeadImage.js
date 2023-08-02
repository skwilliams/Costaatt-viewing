import Image from "next/image";
import style from "../../styles/Programmes.module.scss";

const HeadImage = ({ imagetext, mainimage }) => {
  return (
    <div className={style.pageheader}>
      <Image
        className={style.pageheaderimg}
        src={mainimage}
        alt={imagetext}
        priority={true}
        sizes ="75vw"
        //style= {{width:'100%',
                //height:'auto',}}
       width="0"
       height="0"
     
        quality="75"
        //fill={true} //(makes the two two menus above disappear, we may use this instead of the width and height
        //parent element then should be position fixed, relative?)
        
        
      />
      <div className={style.pageheadertext}>{imagetext}</div>
    </div>
  );
};

export default HeadImage;
