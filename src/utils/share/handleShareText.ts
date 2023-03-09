import { ShareText } from "utils/customInterfaces";

export default async function handleShareText(shareText: ShareText) {
  const shareTextRequest = await fetch("/api/share/text", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shareText),
  });

  const shareTextResponse = await shareTextRequest.json();

  console.log(shareTextResponse);
}
