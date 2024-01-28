import React, { useState, useEffect, useContext } from "react";
import Spinner from "../Spinner/Spinner";
import UserItems from "./UserItems";
import UsersContext from "../../context/UsersContext";

const UserResults = () => {
  const { users, loading, fetchUsers } = useContext(UsersContext);
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users?.map(function (user) {
        // console.log({ user });
        return <UserItems key={user?.login?.uuid} user={user} />;
      })}
    </div>
  );
};

export default UserResults;
