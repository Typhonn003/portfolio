import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Header = () => {
  return (
    <header className="w-[80%] m-auto py-10">
      <div>
        <h1 className="text-4xl font-bold mb-2">Diego Lima</h1>
        <h2 className="text-lg font-bold mb-4">Desenvolvedor Web Full Stack</h2>
      </div>
      <p className="text-light-blue12 opacity-70 max-w-xs mb-6">
        Meu objetivo é criar produtos acessíveis e inclusivos, proporcionando
        experiências digitais de qualidade para a web.
      </p>
      <nav className="hidden">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <ul className="flex gap-5 h-7">
        <li>
          <a
            className="text-2xl"
            href="https://github.com/typhonn003"
            target="_blank"
            aria-label="Access my GitHub profile"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            className="text-2xl"
            href="https://www.linkedin.com/in/typhonn003/"
            target="_blank"
            aria-label="Access my LinkedIn profile"
          >
            <BsLinkedin />
          </a>
        </li>
      </ul>
    </header>
  );
};
