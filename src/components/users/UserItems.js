import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItems = ({ user }) => {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow- w-14 h-14">
              <img src={user?.picture?.thumbnail} alt="User" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{`${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}</h2>
          {/* <Link to={`/users/${}`} className="text-base-content text-opacity-40"></Link> */}
        </div>
      </div>
    </div>
  );
};

UserItems.propTyes = {
  user: PropTypes.object.isRequired,
};
export default UserItems;
