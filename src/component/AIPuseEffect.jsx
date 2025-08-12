import React, { useState, useEffect } from "react";

export default function AIPuseEffect() {
  const [user, setUser] = useState([]);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoding(false);
      });
  }, []);
  console.log(user);

  return (
    <div>
      <h1>User List</h1>
      {loding ? (
        <p>Loading user...</p>
      ) : (
        <ul>
          {user.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}-{user.phone}-{user.username}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
