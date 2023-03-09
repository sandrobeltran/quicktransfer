import { addDoc, collection, doc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse, ShareText } from "utils/customInterfaces";
import getDate from "utils/getDate";
import { db } from "../../../../firebaseConfig";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  const { body } = req;

  await addDoc(collection(db, "texts"), {
    ...body,
    createdAt: getDate(),
    timeLimit: new Date(body.timeLimit),
  });

  res.status(200).json({
    message: "Text Shared",
  });
}
