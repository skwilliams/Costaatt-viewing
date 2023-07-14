import { useEffect, useState } from 'react';
import styles from '../../styles/Progressbar.module.scss';

export default function Progressbar({ position, section }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgressBar = () => {
      if (position) {
        const sectionElement = document.getElementById(section);
        const sectionHeight = sectionElement.clientHeight;
        let sectionScrollTop = sectionElement.getBoundingClientRect().top;
        if (sectionScrollTop > 0) sectionScrollTop = 0;
        const calculatedProgress =
          ((sectionScrollTop * -1) / sectionHeight) * 100;
        const finalProgress =
          calculatedProgress > 100 ? 100 : calculatedProgress;
        setProgress(finalProgress);
      } else {
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const calculatedProgress =
          (scrollTop / (documentHeight - windowHeight)) * 100;
        setProgress(calculatedProgress);
      }
    };

    // Update the progress bar on scroll
    window.addEventListener('scroll', updateProgressBar);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  return (
    <div
      className={
        position == 'down' ? styles.progressBarDown : styles.progressBar
      }
      style={{
        width: position == 'down' ? '4px' : `${progress}%`,
        height: position == 'down' ? `${progress}%` : '4px',
      }}
    ></div>
  );
}
