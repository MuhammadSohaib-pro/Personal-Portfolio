import uniqid from "uniqid";
import { projects } from "../../portfolio";
import ProjectContainer from "../ProjectContainer/ProjectContainer";

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="mt-16 md:mt-20">
      <h2 className="text-4xl font-bold text-center mb-10 uppercase">
        Projects
      </h2>

      <div className="container mx-auto my-0 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
