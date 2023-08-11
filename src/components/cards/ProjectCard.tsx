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
    <li className="group w-full box-border flex flex-col list-none rounded-md border border-light-blue7 overflow-hidden shadow-md dark:border-dark-blue7 hover:border-light-blue8 hover:dark:border-dark-blue8 lg:flex-row">
      <div className="h-40 border-b border-light-blue7 dark:border-dark-blue7 lg:w-[600px] lg:h-28 lg:p-3 lg:border-0 group-hover:border-light-blue8 group-hover:dark:border-dark-blue8">
        <img
          src={img}
          alt={`Imagem de demonstração do projeto ${name}`}
          className="w-full h-full object-cover object-center lg:border-2 lg:border-light-blue7 lg:rounded-md lg:dark:border-dark-blue7 group-hover:border-light-blue8 group-hover:dark:border-dark-blue8"
        />
      </div>
      <div>
        <div className="flex flex-col gap-3 flex-grow justify-between p-3">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="flex-grow text-sm leading-normal opacity-70">
            {description}
          </p>
          <div className="border-b border-light-blue6 dark:border-dark-blue6" />
          <ul className="flex flex-wrap gap-1 text-light-blue12 cursor-default dark:text-dark-blue12">
            {techs.map((tech, index) => (
              <li
                key={index}
                className="text-xs px-3 py-1.5 rounded-full bg-light-blue11/30 font-medium dark:bg-dark-blue11/30"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex h-10 border-t border-light-blue7 dark:border-dark-blue7 lg:border-0 group-hover:border-light-blue8 group-hover:dark:border-dark-blue8">
          <li className="flex flex-grow justify-center items-center border-r border-light-blue7 dark:border-dark-blue7 lg:overflow-hidden lg:border-l lg:border-t lg:rounded-tl-md group-hover:border-light-blue8 group-hover:dark:border-dark-blue8">
            <a
              href={demonstration!}
              target="_blank"
              className={`h-full flex flex-grow justify-center items-center gap-2 font-medium ${
                demonstration
                  ? "bg-light-blue3 dark:bg-dark-blue3 hover:bg-light-blue4 dark:hover:bg-dark-blue4"
                  : "bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
              }`}
            >
              {demonstration ? "Demonstração" : "Indisponível"}
            </a>
          </li>
          <li className="flex flex-grow justify-center items-center lg:border-t lg:border-light-blue7 lg:dark:border-dark-blue7 group-hover:border-light-blue8 group-hover:dark:border-dark-blue8">
            <a
              href={repository!}
              target="_blank"
              className="h-full flex flex-grow justify-center items-center gap-2 font-medium bg-light-blue3 hover:bg-light-blue4 dark:bg-dark-blue3 dark:hover:bg-dark-blue4"
            >
              Repositório <BsGithub />
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};
