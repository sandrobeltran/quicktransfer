export default async function fetchRecentSharesData() {
  const recentRequest = await fetch("/api/shares/recents", {
    method: "GET",
  });

  const recentResponse = await recentRequest.json();

  return recentResponse
}