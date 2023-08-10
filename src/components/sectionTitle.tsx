interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="sticky top-0 z-20 py-5 backdrop-blur-lg bg-light-blue2/40 dark:bg-dark-blue2/40">
      <h2 className="mobile-width m-auto text-2xl font-bold">{title}</h2>
    </div>
  );
};
