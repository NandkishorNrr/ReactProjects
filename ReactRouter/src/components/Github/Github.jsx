import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/NandkishorNrr")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <div>
        <img src={data.avatar_url} alt="Github profile pic" width={300} />
      </div>
      <div>
        <h1>User: {data.name}</h1>
        <h2>Github Follower: {data.followers}</h2>
      </div>
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/NandkishorNrr");
  return response.json();
};
