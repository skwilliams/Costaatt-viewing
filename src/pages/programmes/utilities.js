export function txtToPara(data, style) {
  return data.split("\n").map((para) =>
   {
    return 
    <p className={style}>{para}</p>;
  });
}

export function getProgrammes(level, data) {
  const _programmes = {
    Bachelor: [],
    Associate: [],
    Certificate: [],
    Diploma: [],
  };

  level === "school"
    ? data.departments.forEach((dept) => {
        const { programmes } = dept;
        programmes &&
          programmes.forEach((prog) => {
            _programmes[prog.prog_level].push(prog);
          });
      })
    : data.programmes &&
      data.programmes.forEach((prog) => {
        _programmes[prog.prog_level].push(prog);
      });
  return _programmes;
}

export function getCoreValues(key) {
  const values = {
    Dedication:
      "We are dedicated to the task of educating all students in our department. We invest the time and energy necessary to create a positive learning environment for our students.",
    Teamwork:
      "We share knowledge and support each other as we work towards achieving our vision and mission.",
    Integrity:
      "We are honest in our actions and have respect for our students and each other.",
    Compassion: "We care about our student's success and well-being.",
    Innovation:
      "We are continuously striving to create a dynamic learning environment for our students. We utilize where necessary new techniques and strategies to improve teaching and learning.",
    "Student-Centeredness":
      "We value and respect the students as unique individuals with different learning abilities. We assist the students as much as possible in realizing their educational goals.",
    "Lifelong-Learning":
      "We engage in lifelong learning and encourage our students to be lifelong learners.",
  };
  return values[key];
}
