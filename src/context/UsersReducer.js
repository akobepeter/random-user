const UsersReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default UsersReducer;
