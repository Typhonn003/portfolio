import { BsGithub } from "react-icons/bs";

export const ProjectCard = () => {
  return (
    <li className="list-none w-full flex flex-col shadow-md border border-light-blue7 rounded-md overflow-hidden dark:border-dark-blue7">
      <div className="h-40 border-b border-light-blue7 dark:border-dark-blue7">
        <img
          src="src/img/placeholder.jpg"
          alt="Descrição da imagem"
          className="h-full w-full object-cover object-left-top"
        />
      </div>
      <div className="flex flex-col gap-3 justify-between p-3">
        <h2 className="font-semibold text-[20px]">Nome do projeto</h2>
        <p className="text-sm leading-normal opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic
          delectus nam corporis consectetur, illum fugiat maxime incidunt harum
          ducimus nostrum officia consequuntur esse vel voluptatem magnam sed
          iste. Molestias!
        </p>
        <div className="border-b border-light-blue6 dark:border-dark-blue6" />
        <ul className="text-light-blue12 flex flex-wrap gap-1 cursor-default dark:text-dark-blue12">
          <li className="text-xs rounded-full px-3 py-2 bg-light-blue11/30 font-medium dark:bg-dark-blue11/30">
            React
          </li>
          <li className="text-xs rounded-full px-3 py-2 bg-light-blue11/30 font-medium dark:bg-dark-blue11/30">
            Typescript
          </li>
          <li className="text-xs rounded-full px-3 py-2 bg-light-blue11/30 font-medium dark:bg-dark-blue11/30">
            Styled Components
          </li>
        </ul>
      </div>
      <ul className="flex h-10 border-t border-light-blue8 dark:border-dark-blue8">
        <li className="flex flex-grow justify-center items-center border-r border-light-blue6 dark:border-dark-blue6">
          <a
            href="#"
            target="_blank"
            className="h-full font-medium flex flex-grow justify-center items-center gap-2 bg-light-blue3 hover:bg-light-blue4 dark:bg-dark-blue3 dark:hover:bg-dark-blue4"
          >
            Demonstração
          </a>
        </li>
        <li className="flex flex-grow justify-center items-center">
          <a
            href="#"
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
