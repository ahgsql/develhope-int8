import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function GithubUser() {
  let { username } = useParams();
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
