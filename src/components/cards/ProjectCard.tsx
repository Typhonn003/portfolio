import { BsGithub } from "react-icons/bs";
import { ProjectData } from "../../types/projectTypes";

interface ProjectProps {
  project: ProjectData;
}

export const ProjectCard = ({ project }: ProjectProps) => {
  const {
    img,
    name,
    description,
    techs,
    links: { demonstration, repository },
  } = project;

  return (
    <li className="list-none w-full flex flex-col shadow-md border border-light-blue7 rounded-md overflow-hidden dark:border-dark-blue7">
      <div className="h-40 border-b border-light-blue7 dark:border-dark-blue7">
        <img
          src={img}
          alt={`Imagem demonstrativa do projeto ${name}`}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-3 flex-grow justify-between p-3">
        <h2 className="font-semibold text-[20px]">{name}</h2>
        <p className="text-sm flex-grow leading-normal opacity-70">
          {description}
        </p>
        <div className="border-b border-light-blue6 dark:border-dark-blue6" />
        <ul className="text-light-blue12 flex flex-wrap gap-1 cursor-default dark:text-dark-blue12">
          {techs.map((tech, index) => (
            <li
              key={index}
              className="text-xs rounded-full px-3 py-2 bg-light-blue11/30 font-medium dark:bg-dark-blue11/30"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex h-10 border-t border-light-blue8 dark:border-dark-blue8">
        <li className="flex flex-grow justify-center items-center border-r border-light-blue6 dark:border-dark-blue6">
          <a
            href={demonstration!}
            target="_blank"
            className={`h-full font-medium flex flex-grow justify-center items-center gap-2 ${
              demonstration
                ? "bg-light-blue3 dark:bg-dark-blue3 hover:bg-light-blue4 dark:hover:bg-dark-blue4"
                : "bg-light-blue3 dark:bg-dark-blue3 cursor-not-allowed"
            }`}
          >
            {demonstration ? "Demonstração" : "Indisponível"}
          </a>
        </li>
        <li className="flex flex-grow justify-center items-center">
          <a
            href={repository!}
            target="_blank"
            className="h-full font-medium flex flex-grow justify-center items-center gap-2 bg-light-blue3 hover:bg-light-blue4 dark:bg-dark-blue3 dark:hover:bg-dark-blue4"
          >
            Repositório <BsGithub />
          </a>
        </li>
      </ul>
    </li>
  );
};
