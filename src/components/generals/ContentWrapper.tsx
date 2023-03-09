interface Props {
  children: JSX.Element | JSX.Element[];
}

const ContentWrapper = ({ children }: Props): JSX.Element => {
  return <div className="flex flex-col p-6 gap-7" >{children}</div>;
};

export default ContentWrapper;
