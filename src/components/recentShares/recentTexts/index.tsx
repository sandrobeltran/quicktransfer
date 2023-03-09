import { SharedText } from "utils/customInterfaces";
import RecentText from "./RecentText";

interface Props {
  recentTexts: SharedText[];
}

const RecentTexts = ({ recentTexts }: Props): JSX.Element => {
  return (
    <div className="w-full grid grid-cols-3 gap-5 items-start">
      {recentTexts.map((text) => (
        <RecentText key={text.id} text={text} />
      ))}
    </div>
  );
};

export default RecentTexts;
