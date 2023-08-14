import { useEffect, useState } from "react";
import * as Icon from "react-icons/bs";

export const ThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode");
    return storedDarkMode === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkMode", String(isDarkMode));

    const favicon = document.querySelector<HTMLLinkElement>(
      'link[rel="shortcut icon"]'
    );

    if (isDarkMode) {
      favicon!.href = "/src/img/dark-favicon.ico";
    } else {
      favicon!.href = "/src/img/favicon.ico";
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((oldValue) => !oldValue);
  };

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Mude o tema da página"
      className="text-2xl bg-light-blue12 text-light-blue2 p-2 rounded-full fixed top-4 right-4 z-50 dark:bg-dark-blue12 dark:text-dark-blue2 lg:top-6 lg:right-6"
    >
      {isDarkMode ? <Icon.BsFillMoonStarsFill /> : <Icon.BsFillSunFill />}
    </button>
  );
};
