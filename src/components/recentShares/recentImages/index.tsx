import { SharedImage } from "utils/customInterfaces";
import RecentImage from "./RecentImage";

interface Props {
  recentImages: SharedImage[];
}

const RecentImages = ({ recentImages }: Props): JSX.Element => {
  return (
    <div className="w-full grid grid-cols-3 gap-5 items-start">
      {recentImages.map((image) => (
        <RecentImage key={image.id} image={image} />
      ))}
    </div>
  );
};

export default RecentImages;
