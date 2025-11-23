interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className = "" }: SectionTitleProps) => {
  return (
    <div className={`mb-6 text-left ${className}`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-left">
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;