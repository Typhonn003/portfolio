import { ProjectCard } from "./projectCard";

export const Projects = () => {
  return (
    <section className="pb-10">
      <div className="sticky top-0 z-20 py-5 mb-5 backdrop-blur-sm bg-light-blue2/10 dark:bg-dark-blue2/10">
        <h2 className="w-[80%] m-auto text-2xl font-bold">Projetos</h2>
      </div>
      <div className="flex flex-col gap-6 w-[80%] m-auto text-base">
        <ProjectCard />
      </div>
    </section>
  );
};