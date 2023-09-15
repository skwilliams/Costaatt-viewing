import CourseStyle from '../../styles/Course.module.scss';
import Image from 'next/image';

const ProgOfferingDetails = ({ txt, detailIcon, data }) => {
  return (
    <div className={CourseStyle.fiveColGrid}>
      <Image
        className={CourseStyle.icon}
        src={detailIcon}
        alt={`${txt} icon`}
      />
      {data.map((value) => {
        return (
          <p key={value} className={CourseStyle.iconfont}>
            {' '}
            &#10004; {value}
          </p>
        );
      })}
    </div>
  );
};

export default ProgOfferingDetails;
