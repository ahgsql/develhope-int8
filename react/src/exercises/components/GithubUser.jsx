import React, { useEffect, useState } from "react";

export default function GithubUser({ username }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, [username]);

  return (
    <div>
      {user && (
        <>
          <h5>{user.name}</h5>
          <img width="100" src={user.avatar_url} alt="" />{" "}
        </>
      )}
    </div>
  );
}
