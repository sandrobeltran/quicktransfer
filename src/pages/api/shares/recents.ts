import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse, ShareText } from "utils/customInterfaces";
import getDate from "utils/getDate";
import { db } from "../../../../firebaseConfig";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Texts
  const recentTexts = (await getDocs(collection(db, "texts"))).docs
    .filter((text) => text.data().public === true)
    .sort((a, b) => b.data().createdAt - a.data().createdAt)
    .slice(0, 3);

  const customTexts = recentTexts.map((share) => {
    return {
      id: share.id,
      ...share.data(),
    };
  });

  // Images
  const recentImages = (await getDocs(collection(db, "images"))).docs
    .filter((text) => text.data().public === true)
    .sort((a, b) => b.data().createdAt - a.data().createdAt)
    .slice(0, 3);

  const customImages = recentImages.map((share) => {
    return {
      id: share.id,
      ...share.data(),
    };
  });

  // Files
  const recentFiles = (await getDocs(collection(db, "files"))).docs
    .filter((text) => text.data().public === true)
    .sort((a, b) => b.data().createdAt - a.data().createdAt)
    .slice(0, 3);

  const customFiles = recentFiles.map((share) => {
    return {
      id: share.id,
      ...share.data(),
    };
  });

  res.status(200).json({
    data: { texts: customTexts, images: customImages, files: customFiles },
  });
}
