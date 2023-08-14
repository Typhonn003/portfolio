import { projectData } from "../../data";
import { ProjectCard } from "../cards/ProjectCard";
import { SectionTitle } from "../layout/SectionTitle";

export const Projects = () => {
  return (
    <section className="pb-10" id="projects">
      <SectionTitle title="Projetos" />
      <ul className="group/list mobile-width m-auto flex flex-col gap-6 text-base lg:flex lg:flex-col">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
};
