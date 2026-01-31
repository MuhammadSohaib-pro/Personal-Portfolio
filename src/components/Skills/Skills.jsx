import uniqid from "uniqid";
import { skills } from "../../portfolio";

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className="mt-16 md:mt-20 skills" id="skills">
      <h2 className="text-4xl font-bold text-center mb-10 uppercase">Skills</h2>
      <ul className=" max-w-md w-full mx-auto my-0 flex flex-wrap items-center justify-center">
        {skills.map((skill) => (
          <li key={uniqid()} className="m-2 btn btn--plain">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
