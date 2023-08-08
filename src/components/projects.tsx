import { projectData } from "../utils/projectData";
import { ProjectCard } from "./projectCard";

export const Projects = () => {
  return (
    <section className="pb-10">
      <div className="sticky top-0 z-20 py-5 mb-5 backdrop-blur-sm bg-light-blue2/10 dark:bg-dark-blue2/10">
        <h2 className="mobile-width m-auto text-2xl font-bold">Projetos</h2>
      </div>
      <div className="flex flex-col gap-6 mobile-width m-auto text-base">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
