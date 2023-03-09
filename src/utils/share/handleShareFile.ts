import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ShareFile, ShareImage } from "utils/customInterfaces";
import { storage } from "../../../firebaseConfig";

export default async function handleShareFile(shareFile: ShareFile) {
  // Upload image to Firebase
  const fileRef = ref(storage, `sharedFiles/${shareFile.file?.name}`);
  const uploadFileTask = uploadBytesResumable(fileRef, shareFile.file as File);

  uploadFileTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`File upload is ${progress} done`);
    },
    (error) => {
      console.log(error);
    },
    async () => {
      const fileURL: string = await getDownloadURL(uploadFileTask.snapshot.ref);

      //Make api request
      const shareFileRequest = await fetch("/api/share/file", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...shareFile,
          file: fileURL,
          name: shareFile.file?.name,
        }),
      });

      const shareFileResponse = await shareFileRequest.json();
      console.log(shareFileResponse);
    }
  );
}
