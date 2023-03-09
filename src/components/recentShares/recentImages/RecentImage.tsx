import FadeInImage from "components/generals/FadeInImage";
import Image from "next/image";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import copyTextToClipboard from "utils/copyTextToClipboard";
import { SharedImage, SharedText } from "utils/customInterfaces";

interface Props {
  image: SharedImage;
}

const cardStyles = `
    relative 
    w-fit 
    h-fit 
    shadow-2xl
    shadow-violet-500/50 
    bg-gradient-to-bl
    from-violet-400
    to-violet-500 
    rounded-3xl 
    overflow-hidden
    text-white 
    font-regular
`;

const RecentImages = ({ image }: Props): JSX.Element => {
  const [downloaded, setDownloaded] = useState<boolean>(false);

  const handleDownload = () => {
    // Animation
    setDownloaded(true);
    const timer = setTimeout(() => {
      setDownloaded(false);
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <div className={cardStyles}>
      <FadeInImage src={image.image} alt={`Shared Image - ${image.image}`} />
      <a
        onClick={(e) => handleDownload()}
        title="Download"
        href={image.image}
        target={"_blank"}
        download={image.name}
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
      </a>
    </div>
  );
};

export default RecentImages;
