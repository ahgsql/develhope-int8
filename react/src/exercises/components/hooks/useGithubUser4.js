import useSWR from "swr";
function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
const fetcher = (...args) =>
  fetch(...args).then(async (response) => {
    await delay(500);
    return response.json();
  });
export default function useGithubUser(username) {
  if (!username) return [null, false, null];
  const { data, isLoading, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return [data, isLoading, error, mutate];
}
