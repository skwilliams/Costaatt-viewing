import React, { useState } from 'react';
import styles from '../../styles/ProgCard.module.scss';
import navBarStyles from '../../styles/Nav.module.scss';
import { BiSearch } from 'react-icons/bi';
import SCHOOLDATA from '../../../data/schooldata.json';

const SearchCourse = ({ handleSearchSubmit, DATA }) => {
  const [name, setName] = useState('');
  const [hints, setHints] = useState([]);
  const indexedCourses =
    DATA ||
    SCHOOLDATA.reduce((acc, school) => {
      school.departments.map((dept) => {
        if (dept.programmes) {
          dept.programmes.map((prg) => {
            const program = {
              school: school.name,
              schoolStump: school.nameStump,
              department: dept.name,
              department_image: dept.image,
              ...prg,
            };
            acc.push(program);
          });
        }
      });

      return acc;
    }, []);

  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    const hintVals = DATA
      ? DATA.filter((data) => {
          console.log(data);
          const course = data.courseTitle.toLowerCase();
          return data.courseTitle && course.includes(value);
        })
      : indexedCourses.filter((course) => {
          const prgName = course.prog_name.toLowerCase();
          return course.prog_name && prgName.includes(value);
        });
    setName(value);
    setHints(hintVals);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearchSubmit(hints);
    resetSearch();
  };
  const handleLinkSubmit = (hint) => {
    handleSearchSubmit(hint);
    resetSearch();
  };
  const resetSearch = () => {
    setHints([]);
    setName('');
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit} className={styles.magnifyingGlass}>
        <input
          className={styles.searchbox}
          type="text"
          value={name}
          placeholder="Search for course"
          onChange={handleChange}
        />
        <BiSearch onClick={handleSubmit} className={styles.searchIcon} />
      </form>

      <div className={styles.searchHints}>
        {hints.map((hint, ind) => {
          if (ind < 4) {
            return (
              <p
                onClick={() => handleLinkSubmit([hint])}
                key={hint.prog_name || hint.courseTitle}
              >
                {hint.prog_name || hint.courseTitle}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SearchCourse;
