import React from 'react';
import FeatStyle from '../../styles/Featured.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Featured = ({ feat }) => {
  return (
    <>
      <div className={FeatStyle.gridContwo}>
        {feat?.map((fe, ind) => (
          <div key={ind}>
            <div className={FeatStyle.gridtwo}>
              <Image
                className={FeatStyle.imgstyle}
                src={fe.photo}
                alt={fe.altText}
                width="400"
                height="300"
              />
            </div>
            <div className={FeatStyle.gridtwo}>
              <div className={FeatStyle.title}>{fe.title}</div>

              <p className={FeatStyle.text}> {fe.text}</p>
              <Link className={FeatStyle.goto} href={fe.link}>
                {' '}
                Read More...{' '}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Featured;
