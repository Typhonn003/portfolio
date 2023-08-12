import * as Icon from "react-icons/bs";
import { ThemeButton } from "../ui/ThemeButton";

export const Header = () => {
  return (
    <header className="mobile-width m-auto py-10 lg:h-full lg:py-0 lg:flex lg:flex-col lg:justify-between">
      <ThemeButton />
      <div>
        <div>
          <h1 className="text-4xl font-bold mb-2">Diego Lima</h1>
          <h2 className="text-lg font-bold text-light-blue11 border-r-2 border-light-blue11 w-[25ch] whitespace-nowrap overflow-hidden animate-typeWriter mb-4 dark:text-dark-blue11 dark:border-dark-blue11">
            Desenvolvedor Web Full Stack
          </h2>
        </div>
        <p className="w-[90%] max-w-md mb-6 opacity-70 md:max-w-md">
          Meu objetivo é criar produtos acessíveis e inclusivos, proporcionando
          experiências digitais de qualidade para a web.
        </p>
      </div>
      <nav className="hidden">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <ul className="flex gap-5">
        <li>
          <a
            className="text-3xl"
            href="https://github.com/typhonn003"
            target="_blank"
            aria-label="Acesse meu perfil do GitHub"
          >
            <Icon.BsGithub />
          </a>
        </li>
        <li>
          <a
            className="text-3xl"
            href="https://www.linkedin.com/in/typhonn003/"
            target="_blank"
            aria-label="Acesse meu perfil do LinkedIn"
          >
            <Icon.BsLinkedin />
          </a>
        </li>
      </ul>
    </header>
  );
};
