interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className = "" }: SectionTitleProps) => {
  return (
    <h2
      className={`mb-8 text-3xl md:text-4xl font-semibold tracking-tight text-left ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;