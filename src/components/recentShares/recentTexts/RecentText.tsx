import { useState } from "react";
import { FaClipboard } from "react-icons/fa";
import copyTextToClipboard from "utils/copyTextToClipboard";
import { SharedText } from "utils/customInterfaces";

interface Props {
  text: SharedText;
}

const cardStyles = `
    relative 
    w-fit 
    h-fit 
    max-w-xl
    max-h-40
    shadow-2xl
    shadow-violet-500/50 
    pr-16 
    bg-gradient-to-bl
    from-violet-400
    to-violet-500 
    rounded-3xl 
    px-5 
    py-3 
    overflow-hidden
    text-white 
    font-regular
    after:content-['']
    after:w-full
    after:h-7
    after:gradie
    after:bg-gradient-to-t 
    after:from-violet-500 
    after:to-violet-500/0
    after:absolute
    after:bottom-0
    after:left-0
`;

const RecentText = ({ text }: Props) : JSX.Element => {
  const [coppied, setCoppied] = useState<boolean>(false);

  const handleCopy = (text: string) => {
    copyTextToClipboard(text);
    setCoppied(true);
    const timer = setTimeout(() => {
      setCoppied(false);
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <div className={cardStyles}>
      <p className="">{text.content}</p>
      <div
        onClick={() => handleCopy(text.content)}
        title="Copy"
        className={`
        z-10 
        hover:scale-105 
        ${coppied ? "animate-ping" : ""}
        transition-transform 
        absolute 
        cursor-pointer 
        top-1 
        right-1 
        w-10 
        grid 
        place-items-center 
        h-10 
        bg-white/30 
        rounded-full`}
      >
        <FaClipboard />
      </div>
    </div>
  );
};

export default RecentText;
