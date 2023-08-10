import { projectData } from "../../data";
import { ProjectCard } from "../cards/ProjectCard";
import { SectionTitle } from "../layout/SectionTitle";

export const Projects = () => {
  return (
    <section className="pb-10">
      <SectionTitle title="Projetos" />
      <ul className="mobile-width m-auto grid xs:grid-cols-2 gap-6 text-base">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
};
