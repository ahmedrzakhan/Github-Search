import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_FOLLOWERS_REQUEST,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_FAILURE,
} from "./actionTypes";

const initialState = {
  users: [],
  followers: {},
  error: false,
  totalCount: 0,
  login: "",
};

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_REQUEST:
      console.log(type, payload);
      return { ...state };

    case GET_USERS_SUCCESS:
      console.log(type, payload);

      return { ...state, users: payload.items };

    case GET_USERS_FAILURE:
      console.log(type, payload);
      return { ...state, error: true };

    case GET_FOLLOWERS_REQUEST:
      console.log(type, payload);
      return { ...state };

    case GET_FOLLOWERS_SUCCESS:
      console.log(type, payload);
      const { data, login } = payload;
      console.log(state.followers)
      return {
        ...state,
        followers: { ...state.followers, [login]: data },
        login: login,
      };

    case GET_FOLLOWERS_FAILURE:
      console.log(type, payload);
      return { ...state, error: true };

    default:
      return state;
  }
};

export default searchReducer;
