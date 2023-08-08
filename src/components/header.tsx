import { useEffect, useState } from "react";
import {
  BsGithub,
  BsLinkedin,
  BsFillSunFill,
  BsFillMoonStarsFill,
} from "react-icons/bs";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode");
    return storedDarkMode === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkMode", String(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((oldValue) => !oldValue);
  };

  return (
    <header className="mobile-width m-auto py-10">
      <button
        onClick={toggleDarkMode}
        aria-label="Change page theme"
        className="text-2xl fixed top-6 right-6 z-30"
      >
        {isDarkMode ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
      </button>
      <div>
        <h1 className="text-4xl font-bold mb-2">Diego Lima</h1>
        <h2 className="text-light-blue11 text-lg font-bold mb-4 border-r-2 border-light-blue11 w-[25ch] whitespace-nowrap overflow-hidden animate-typeWriter dark:text-dark-blue11 dark:border-dark-blue11">
          Desenvolvedor Web Full Stack
        </h2>
      </div>
      <p className="max-w-[250px] mb-6 opacity-70 md:max-w-md">
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
      <ul className="flex gap-5">
        <li>
          <a
            className="text-3xl"
            href="https://github.com/typhonn003"
            target="_blank"
            aria-label="Access my GitHub profile"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            className="text-3xl"
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
