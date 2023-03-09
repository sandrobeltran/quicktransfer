import {
  FileIcon,
  ImageIcon,
  TextIcon,
} from "components/icons/ContentSelectorIcons";
import Image from "next/image";
import Link from "next/link";

const stylingClass = {
  className: `
    w-96
    aspect-video
    cursor-pointer 
    bg-gradient-to-bl
    from-violet-400
    to-violet-500
    shadow-2xl
    text-white
    shadow-violet-500/50
    rounded-3xl
    flex
    flex-col
    items-center
    justify-center
    gap-3
    transition
    hover:-translate-y-1
    hover:shadow-violet-500/80
    `,
};

const ContentSelector = () => {
  return (
    <div className="flex justify-center flex-wrap gap-6">
      <Link href={"/share/text"}>
        <div {...stylingClass}>
          <TextIcon className="fill-white w-28" />
          <p className="font-semibold text-xl">Text</p>
        </div>
      </Link>
      <Link href={"/share/image"}>
        <div {...stylingClass}>
          <ImageIcon className="fill-white stroke-white w-28" />
          <p className="font-semibold text-xl">Image</p>
        </div>
      </Link>
      <Link href={"/share/file"}>
        <div {...stylingClass}>
          <FileIcon className="fill-white stroke-white w-28" />
          <p className="font-semibold text-xl">File</p>
        </div>
      </Link>
    </div>
  );
};

export default ContentSelector;
