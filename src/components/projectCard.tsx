import { BsGithub } from "react-icons/bs";

export const ProjectCard = () => {
  return (
    <li className="list-none w-full flex flex-col border border-light-blue7 rounded-md overflow-hidden">
      <div className="h-40">
        <img
          src="src/img/placeholder.jpg"
          alt="Descrição da imagem"
          className="h-full w-full object-cover object-left-top"
        />
      </div>
      <div className="flex flex-col gap-3 justify-between p-3">
        <h2 className="font-semibold text-[20px]">Nome do projeto</h2>
        <p className="text-sm leading-normal self-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic
          delectus nam corporis consectetur, illum fugiat maxime incidunt harum
          ducimus nostrum officia consequuntur esse vel voluptatem magnam sed
          iste. Molestias!
        </p>
        <ul className="text-light-blue12 flex flex-wrap gap-1 cursor-default">
          <li className="text-xs rounded-full px-3 py-2 bg-light-blue11/30 font-medium">
            React
          </li>
          <li className="text-xs rounded-full px-3 py-2 bg-light-blue11/30 font-medium">
            Typescript
          </li>
          <li className="text-xs rounded-full px-3 py-2 bg-light-blue11/30 font-medium">
            Styled Components
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex h-10 bg-light-blue3 border-t border-light-blue8">
          <li className="flex-grow flex justify-center items-center border-r border-light-blue6">
            <a href="#" target="_blank">
              Demonstração
            </a>
          </li>
          <li className="flex-grow flex justify-center items-center">
            <a href="#" target="_blank" className="flex items-center gap-2">
              Repositório <BsGithub />
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};
