import * as C from "./components";

export const App = () => {
  return (
    <div className="bg-light-blue2 text-light-blue12 dark:bg-dark-blue2 dark:text-dark-blue12">
      <C.Header />
      <main>
        <C.About />
        <C.Techs />
        <C.Projects />
      </main>
    </div>
  );
};
