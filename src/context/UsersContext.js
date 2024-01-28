import React, { createContext, useState, useReducer } from "react";
import UsersReducer from "./UsersReducer";

const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [myApi, setMyApi] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [loading, setLoading] = useState(false);
  //   const initialState = {
  //     users: [],
  //     loading: false,
  //   };

  //   const [state, dispatch] = useReducer(UsersReducer, initialState);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://randomuser.me/api/?results=30");
      const data = await response.json();
      //   console.log({ data });
      let myApi = setUsers(data?.results);
      console.log({ myApi });
      setMyApi(myApi);
      //   dispatch({
      //     type: "FETCH_USERS",
      //     payload: data?.result,
      //: state?.loading
      // : state?.users
      //   });
    } catch (error) {
      console.log("fetchUsers ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchInput = (event) => {
    setSearchUser(event.target.value);
    const newUsers = users.filter((item) =>
      item.name.first.toLowerCase().includes(event.target.value)
    );
    console.log({ newUsers });
    // ); renderData(// render filtered data
    setMyApi(newUsers); // and set it to state
  };

  return (
    <UsersContext.Provider
      value={{ users, loading, handleSearchInput, fetchUsers }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
