import { useEffect, useState } from "react";
import { SlArrowUp } from "react-icons/sl";

export const BackToTopButton = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled: number = document.documentElement.scrollTop;
      scrolled > 400 ? setVisible(true) : setVisible(false);
    };

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      data-visible={visible}
      aria-label="Volte ao topo da página"
      className="hidden text-2xl bg-light-blue12 text-light-blue2 p-2 rounded-md fixed bottom-4 right-4 z-50 dark:bg-dark-blue12 dark:text-dark-blue2 lg:bottom-6 lg:right-6 data-[visible=true]:block"
    >
      <SlArrowUp />
    </button>
  );
};
