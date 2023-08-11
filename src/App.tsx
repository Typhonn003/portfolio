import * as C from "./components";

export const App = () => {
  return (
    <div className="bg-light-blue2 text-light-blue12 dark:bg-dark-blue2 dark:text-dark-blue12">
      <div className="lg:min-h-screen lg:max-w-7xl lg:m-auto lg:px-16">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="lg:max-h-screen lg:w-1/2 lg:sticky lg:top-0 lg:py-24">
            <C.Header />
          </div>
          <div className="lg:w-1/2 lg:py-24">
            <main>
              <C.About />
              <C.Techs />
              <C.Projects />
            </main>
            <C.Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
