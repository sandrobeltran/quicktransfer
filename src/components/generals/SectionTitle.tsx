import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SectionTitle = ({ children }: Props): JSX.Element => {
  return (
    <div>
      <h2 className="font-semibold font-primary text-2xl">{children}</h2>
    </div>
  );
};

export default SectionTitle;
