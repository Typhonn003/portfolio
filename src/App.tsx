import { About, Header, Projects, Techs } from "./components";

export const App = () => {
  return (
    <div className="bg-light-blue2 text-light-blue12 dark:bg-dark-blue2 dark:text-dark-blue12">
      <Header />
      <main>
        <About />
        <Techs />
        <Projects />
      </main>
    </div>
  );
};
