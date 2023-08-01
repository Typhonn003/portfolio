export const ProjectCard = () => {
  return (
    <ul className="group w-full max-w-[340px] h-[190px] overflow-hidden rounded-md border-2 border-light-blue7 relative dark:border-dark-blue7">
      <div className="h-full transition-all duration-500 group-hover:h-0">
        <img
          src="src/img/placeholder.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <h2 className="absolute top-0 right-0 text-xl font-bold bg-light-blue9 px-4 py-2 rounded-bl-lg uppercase dark:bg-dark-blue9">
          Hub LinkUp
        </h2>
      </div>
      <div className="h-full bg-light-blue9 dark:bg-dark-blue9">
        <p className="px-4 pb-4 pt-14 text-light-blue1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          provident minus at nihil. Ea deserunt nesciunt aperiam.
        </p>
      </div>
    </ul>
  );
};
