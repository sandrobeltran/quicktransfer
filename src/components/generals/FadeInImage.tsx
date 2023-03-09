/* eslint-disable @next/next/no-img-element */
import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import Loader from "./Loader";

interface Props {
  src: string;
  alt: string;
}

const FadeInImage = ({ src, alt }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className="relative">
      {loading ? <Loader /> : null}
      <img
        src={src}
        alt={alt}
        className={`
        z-20
        block 
        object-contain 
        object-top
        transition-opacity
        opacity: ${loading ? 0 : 1}
        `}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default FadeInImage;
