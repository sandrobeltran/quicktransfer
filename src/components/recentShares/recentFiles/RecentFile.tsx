import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import copyTextToClipboard from "utils/copyTextToClipboard";
import { SharedFile, SharedText } from "utils/customInterfaces";

interface Props {
  file: SharedFile;
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

const RecentFile = ({ file }: Props): JSX.Element => {
  const [downloaded, setDownloaded] = useState<boolean>(false);

  const handleDownload = () => {
    setDownloaded(true);
    const timer = setTimeout(() => {
      setDownloaded(false);
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <div className={cardStyles}>
      <p className="">{file.name}</p>
      <a href={file.file} download={file.name} target={"_blank"} >
        <div
          onClick={() => handleDownload()}
          title="Copy"
          className={`
        z-10 
        hover:scale-105 
        ${downloaded ? "animate-ping" : ""}
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
          <FaDownload />
        </div>
      </a>
    </div>
  );
};

export default RecentFile;
