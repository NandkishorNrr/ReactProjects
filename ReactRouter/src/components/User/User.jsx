import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl p-4">Use: {userid}</div>
  );
}

export default User;
