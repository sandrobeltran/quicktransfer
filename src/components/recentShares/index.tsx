import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SharedText, SharedImage, SharedFile } from "utils/customInterfaces";
import fetchRecentSharesData from "./fetchRecentSharesData";
import RecentFiles from "./recentFiles";
import RecentImages from "./recentImages";
import RecentTexts from "./recentTexts";

interface RecentShares {
  texts: SharedText[];
  images: SharedImage[];
  files: SharedFile[];
}

const RecentShares = (): JSX.Element => {
  const [recentSharesData, setRecentSharesData] = useState<RecentShares | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const response = await fetchRecentSharesData();
      setRecentSharesData(response.data);
    })();
  }, []);

  if (!recentSharesData) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-lg font-regular text-black/60">Texts</h4>
      <RecentTexts recentTexts={recentSharesData.texts} />
      <h4 className="text-lg font-regular text-black/60">Images</h4>
      <RecentImages recentImages={recentSharesData.images} />
      <h4 className="text-lg font-regular text-black/60">File</h4>
      <RecentFiles recentFiles={recentSharesData.files} />
    </div>
  );
};

export default RecentShares;
