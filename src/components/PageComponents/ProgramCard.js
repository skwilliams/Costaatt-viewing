import React from 'react';
import CardStyle from '../../styles/ProgCard.module.scss';
import Image from 'next/image';

const ProgramCard = ({ program }) => {
  const totalCredits =
    program.prog_major_credits +
    program.prog_core_credits +
    program.prog_elect_credits +
    program.prog_supp_credits;
  const fulltimeYears = Math.floor(totalCredits / 30);
  const parttimeYears = Math.floor(totalCredits / 20);
  //console.log(program.department_image);
  return (
    <>
      <div className={CardStyle.progGridConthree}>
        <>
          <div className={CardStyle.progGridthree}>
            <Image
              className={CardStyle.imgstyle}
              src={program.department_image}
              alt={program.dept_code}
              width="200"
              height="200"
            />
            {/* <div className={CardStyle.bannerbottomBsc}> Bachelors</div> */}
          </div>
          <div className={CardStyle.progGridthree}>
            <div
              className={CardStyle.coursetitle}
            >{`${program.prog_name} (${program.school})`}</div>{' '}
            {/*dynamic content}*/}
            <div className={CardStyle.block}>
              <p className={CardStyle.cardtext}> {program.prog_description}</p>{' '}
              {/* fixed */}
              <p className={CardStyle.cardtextIn}>
                {fulltimeYears} years full time
              </p>{' '}
              {/*dynamic content}*/}
              <p className={CardStyle.cardtextIn}>
                {parttimeYears} years part-time
              </p>{' '}
              {/*dynamic content}*/}
            </div>
            {/* <div className={CardStyle.bannerbottomAas}> Associate</div> */}
          </div>
        </>
      </div>
      <div className={CardStyle.progGridConthree}>
        <div className={CardStyle.bannerbottom}> {program.prog_level} </div>
      </div>
    </>
  );
};

export default ProgramCard;
