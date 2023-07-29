export const ProjectCard = () => {
  return (
    <div className="bg-light-blue8 w-full p-4 rounded-md dark:bg-dark-blue8">
      <div className="bg-white h-36 rounded-md mb-4">
        <img src="" alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-light-blue12 text-2xl font-bold dark:text-dark-blue12">
          Nome do projeto
        </h2>
        <p className="text-light-blue12 text-sm dark:text-dark-blue12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
          ducimus, eaque autem voluptate rem voluptas praesentium, explicabo
          delectus nulla labore commodi eum ad reprehenderit asperiores. Culpa
          placeat fugit non ipsam.
        </p>
        <ul className="flex gap-2">
          <li className="bg-light-blue10 text-light-blue1 rounded-full px-3 py-1 text-sm font-medium dark:bg-dark-blue10 dark:text-dark-blue1">
            Tech 1
          </li>
          <li className="bg-light-blue10 text-light-blue1 rounded-full px-3 py-1 text-sm font-medium dark:bg-dark-blue10 dark:text-dark-blue1">
            Tech 2
          </li>
          <li className="bg-light-blue10 text-light-blue1 rounded-full px-3 py-1 text-sm font-medium dark:bg-dark-blue10 dark:text-dark-blue1">
            Tech 3
          </li>
        </ul>
      </div>
    </div>
  );
};
