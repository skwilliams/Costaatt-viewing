import StaffStyle from "../../styles/StaffDeptCard.module.scss";
import Image from "next/image";

const FacultyStaffCard = ({ staff, dept }) => {
  return (
    <>
      {staff
        .filter((member) => member.dept_code === dept)
        .map((fe) => (
          <>
            <div className={StaffStyle.cardCont}>
              {/* {fe.photo && fe.altText && (
                <Image
                  className={StaffStyle.imgstyle}
                  src={fe.photo}
                  alt={fe.altText}
                  width="200"
                  height="200"
                />
              )} */}

              {fe.name && <p className={StaffStyle.name}>{fe.name}</p>}
              {fe.position && (
                <p className={StaffStyle.position}>{fe.position}</p>
              )}
              {fe.phone && <p className={StaffStyle.tel}> {fe.phone}</p>}
              {/* figure out mail to  */}
              {fe.email && (
                <a className={StaffStyle.email} href={fe.email}>
                  {"  "}
                  {fe.email}
                </a>
              )}
            </div>
          </>
        ))}
    </>
  );
};

export default FacultyStaffCard;
