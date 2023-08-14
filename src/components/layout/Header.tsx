import * as Icon from "react-icons/bs";
import { ThemeButton } from "../ui/ThemeButton";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header className="mobile-width m-auto py-10 lg:h-full lg:py-0 lg:flex lg:flex-col lg:justify-between">
      <ThemeButton />
      <div>
        <div>
          <h1 className="text-4xl font-bold mb-2 lg:text-5xl">Diego Lima</h1>
          <h2 className="text-lg font-bold text-light-blue11 border-r-2 border-light-blue11 w-[25ch] whitespace-nowrap overflow-hidden animate-typeWriter mb-4 dark:text-dark-blue11 dark:border-dark-blue11 lg:text-xl">
            Desenvolvedor Web Full Stack
          </h2>
        </div>
        <p className="w-[90%] max-w-md mb-6 opacity-70 md:max-w-md lg:max-w-xs">
          Meu objetivo é criar produtos acessíveis e inclusivos, proporcionando
          experiências digitais de qualidade para a web.
        </p>
        <NavBar />
      </div>
      <nav aria-label="Lista de links para minhas redes">
        <ul className="flex gap-4">
          <li>
            <a
              className="text-3xl lg:text-xl lg:flex lg:items-center lg:gap-2 lg:px-5 lg:py-2 lg:rounded-md lg:bg-light-blue3 lg:border lg:border-light-blue7 lg:hover:bg-light-blue4 lg:hover:border-light-blue8 lg:dark:bg-dark-blue3 lg:dark:border-dark-blue7 lg:dark:hover:bg-dark-blue4 lg:dark:hover:border-dark-blue8"
              href="https://github.com/typhonn003"
              target="_blank"
              aria-label="Acesse meu perfil do GitHub"
            >
              <span className="hidden lg:block">GitHub</span>
              <Icon.BsGithub />
            </a>
          </li>
          <li>
            <a
              className="text-3xl lg:text-xl lg:flex lg:items-center lg:gap-2 lg:px-5 lg:py-2 lg:rounded-md lg:bg-light-blue3 lg:border lg:border-light-blue7 lg:hover:bg-light-blue4 lg:hover:border-light-blue8 lg:dark:bg-dark-blue3 lg:dark:border-dark-blue7 lg:dark:hover:bg-dark-blue4 lg:dark:hover:border-dark-blue8"
              href="https://www.linkedin.com/in/typhonn003/"
              target="_blank"
              aria-label="Acesse meu perfil do LinkedIn"
            >
              <span className="hidden lg:block">LinkedIn</span>
              <Icon.BsLinkedin />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
