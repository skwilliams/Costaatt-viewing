import StaffStyle from "../../styles/StaffDeptCard.module.scss";
import standardStyles from "../../styles/main.module.scss";
import Image from "next/image";

const StudentCouncilRep = ({stucouncil}) => {
  return (
    <>
      {stucouncil?.map((stu) => (
        <div key={stu.id}>
          <div className={standardStyles.col1of3}>
            <div className={StaffStyle.cardCont}>
              {stu.photo && stu.altText && (
                <Image
                  className={StaffStyle.imgstyle}
                  src={stu.photo}
                  alt={stu.altText}
                  width="150"
                  height="150"
                />
              )}

              {stu.name && <p className={StaffStyle.name}>{stu.name}</p>}
              {stu.position && (
                <p className={StaffStyle.position}>{stu.position}</p>
              )}
              {stu.phone && <p className={StaffStyle.tel}> {stu.phone}</p>}
              {/* figure out mail to  */}
              {stu.email && (
                <a className={StaffStyle.email} href={stu.email}>
                  {" "}
                  {stu.email}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default StudentCouncilRep;
