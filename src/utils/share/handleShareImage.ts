import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ShareImage } from "utils/customInterfaces";
import { storage } from "../../../firebaseConfig";

export default async function handleShareImage(shareImage: ShareImage) {
  // Upload image to Firebase
  const imageRef = ref(storage, `sharedImages/${shareImage.image?.name}`);
  const uploadImageTask = uploadBytesResumable(
    imageRef,
    shareImage.image as File
  );

  uploadImageTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Image upload is ${progress} done`);
    },
    (error) => {
      console.log(error);
    },
    async () => {
      const imageURL: string = await getDownloadURL(
        uploadImageTask.snapshot.ref
      );

      //Make api request
      const shareImageRequest = await fetch("/api/share/image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...shareImage,
          image: imageURL,
          name: shareImage.image?.name,
        }),
      });

      const shareImageResponse = await shareImageRequest.json();
      console.log(shareImageResponse);
    }
  );
}
