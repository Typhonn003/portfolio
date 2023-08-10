import { projectData } from "../utils/projectData";
import { ProjectCard } from "./projectCard";
import { SectionTitle } from "./sectionTitle";

export const Projects = () => {
  return (
    <section className="pb-10">
      <SectionTitle title="Projetos" />
      <ul className="grid xs:grid-cols-2 gap-6 mobile-width m-auto text-base">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
};
