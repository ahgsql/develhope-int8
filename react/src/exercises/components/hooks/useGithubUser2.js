import React, { useEffect, useState } from "react";

export default function useGithubUser(username) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log("error oldu");
        setError(error);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 555);
      });
  }, [username]);

  return [user, loading, error];
}
