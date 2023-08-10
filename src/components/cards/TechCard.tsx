import { techData } from "../../utils";

interface TechCardProps {
  techName: string;
}

export const TechCard = ({ techName }: TechCardProps) => {
  const tech = techData[techName];

  return (
    <div
      className={`w-full box-border p-8 m-auto rounded-md flex flex-col gap-4 ${tech.color}`}
    >
      <div
        className="w-full flex justify-center items-center text-9xl text-white"
        aria-label={`${tech.name} logo`}
      >
        {tech.logo}
      </div>
      <div className="h-20 flex justify-center items-center">
        <h2 className="text-3xl font-bold text-center text-white">
          {tech.name}
        </h2>
      </div>
    </div>
  );
};
