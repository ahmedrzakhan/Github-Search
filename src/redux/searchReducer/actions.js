import axios from "axios";
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_FOLLOWERS_REQUEST,
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_FAILURE,
} from "./actionTypes";

export const getUsersRequest = (payload) => ({
  type: GET_USERS_REQUEST,
  payload,
});

export const getUsersSuccess = (payload) => ({
  type: GET_USERS_SUCCESS,
  payload,
});

export const getUsersFailure = (payload) => ({
  type: GET_USERS_FAILURE,
  payload,
});

export const getUsers = (payload) => async (dispatch) => {
  dispatch(getUsersRequest(payload));

  const { query } = payload;

  const config = {
    method: "get",
    url: `https://api.github.com/search/users?q=${query}`,
  };

  try {
    const response = await axios(config);
    dispatch(getUsersSuccess(response.data));
  } catch (err) {
    dispatch(getUsersFailure(err));
  }
};

export const getFollowersRequest = (payload) => ({
  type: GET_FOLLOWERS_REQUEST,
  payload,
});

export const getFollowersSuccess = (payload) => ({
  type: GET_FOLLOWERS_SUCCESS,
  payload,
});

export const getFollowersFailure = (payload) => ({
  type: GET_FOLLOWERS_FAILURE,
  payload,
});

export const getFollowers = (payload) => async (dispatch) => {
  dispatch(getFollowersRequest(payload));

  const { url, login } = payload;

  const config = {
    method: "get",
    url: url,
  };

  try {
    const response = await axios(config);
    dispatch(getFollowersSuccess({ data: response.data, login }));
  } catch (err) {
    dispatch(getFollowersFailure(err));
  }
};
