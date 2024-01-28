import React, { useContext } from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
import UsersContext from "../context/UsersContext";

const Home = () => {
  const { handleSearchInput } = useContext(UsersContext);
  return (
    <div>
      {/* <h1 className="text-6xl mt-9">Welcome</h1> */}
      <UserSearch onChange={handleSearchInput} className="gap-5" />
      <UserResults />
    </div>
  );
};

export default Home;
