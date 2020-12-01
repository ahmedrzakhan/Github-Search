import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Div, Flex, Img } from "./Styles";
import { getFollowers } from "./../../redux/searchReducer/actions";

const Followers = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  let users = useSelector((state) => state.search.users);
  let followers = useSelector((state) => state.search.followers);
  console.log("followers", followers);
  const { login } = params;

  const user = users.find((item) => item.login === login);

  useEffect(() => {
    const payload = {
      url: user.followers_url,
      login: user.login,
    };
    if (followers[login] === undefined) {
      dispatch(getFollowers(payload));
    }
  }, [dispatch, login]);

  return (
    <>
      {followers[login] &&
        followers[login].map((follower) => (
          <Flex key={follower.login}>
            <Div>
              <Img src={follower.avatar_url} />
            </Div>
            <Div>
              <Button onClick={() => history.push(`/${follower.login}`)}>
                View
              </Button>
            </Div>
          </Flex>
        ))}
    </>
  );
};

export default Followers;
