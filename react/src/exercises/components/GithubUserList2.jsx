import React, { useEffect, useState } from "react";
import GithubUser from "./GithubUser";
import { Link, Outlet } from "react-router-dom";

export default function GithubUserList({ users }) {
  return (
    <div>
      <ul>
        {users.map((user, i) => {
          return (
            <li key={i}>
              <Link to={"/users/" + user}>{user}</Link>
            </li>
          );
        })}
      </ul>

      <Outlet />
    </div>
  );
}
