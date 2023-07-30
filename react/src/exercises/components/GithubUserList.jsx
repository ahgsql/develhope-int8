import React, { useEffect, useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUserList({ users }) {
  return (
    <div>
      {users.map((user, i) => {
        return <GithubUser key={i} username={user} />;
      })}
    </div>
  );
}
