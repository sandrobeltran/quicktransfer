import { SharedFile, SharedText } from "utils/customInterfaces";
import RecentFile from "./RecentFile";

interface Props {
  recentFiles: SharedFile[];
}

const RecentFiles = ({ recentFiles }: Props): JSX.Element => {
  return (
    <div className="w-full grid grid-cols-3 gap-5 items-start">
      {recentFiles.map((file) => (
        <RecentFile key={file.id} file={file} />
      ))}
    </div>
  );
};

export default RecentFiles;
