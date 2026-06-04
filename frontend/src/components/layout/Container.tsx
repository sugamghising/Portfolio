import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-5xl mx-auto px-4 flex flex-col gap-y-8">
      {children}
    </div>
  );
};

export default Container;
