import React, { useState, useEffect } from "react";

import "./users.css";

interface IPersons {
  completed: boolean;
  id: number;
  title: number;
  userId: number;
}

interface props {
  buttonloading: true;
}

const Users: React.FunctionComponent<props> = ({ buttonloading }) => {
  const [users, setUsers] = useState<IPersons[]>([]);
  const [button, setButton] = useState<boolean>(buttonloading);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [text, setText] = useState<boolean>(false);

  const getusers = async () => {
    setText(true);
    const result = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data: IPersons[] = await result.json();
    setUsers(data);
    setIsLoading(false);
  };
  console.log(users);
  function details(isLoading: boolean) {
    if (isLoading) {
      const list = <div>Loading...!!</div>;
      return list;
    } else {
      const list = (
        <ul>
          {users.map((user) => {
            return (
              <li className="user-details" key={user.id}>
                {user.title}
              </li>
            );
          })}
        </ul>
      );
      return list;
    }
  }
  return (
    <>
      {button && <button onClick={getusers}>users</button>}
      {text && details(isLoading)}
    </>
  );
};

export default Users;
