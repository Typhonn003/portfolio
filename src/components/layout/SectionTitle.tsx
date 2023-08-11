interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="backdrop-blur-lg bg-light-blue2/40 sticky top-0 z-20 py-5 dark:bg-dark-blue2/40 lg:static lg:py-0 lg:pb-5">
      <h2 className="mobile-width m-auto text-2xl font-bold">{title}</h2>
    </div>
  );
};
