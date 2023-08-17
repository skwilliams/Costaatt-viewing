import HomeStyles from "../../styles/Home.module.scss";
import Image from "next/image";

const SchoolTile = ({ title, img }) => {
  return (
    <div>
      <Image src={img} alt={title} />
      <div className={HomeStyles.schoolTileTitle}>{title}</div>
    </div>
  );
};

export default SchoolTile;
