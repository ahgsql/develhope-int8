import React, { useEffect, useState } from "react";
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
  const { data, isLoading, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  return [data, isLoading, error];
}
