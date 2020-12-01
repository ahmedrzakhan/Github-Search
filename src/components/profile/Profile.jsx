import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Div, Flex, Img } from "./../dashboard/Styles";

const Profile = () => {
  const params = useParams();
  const users = useSelector((state) => state.search.users);
  const followers = useSelector((state) => state.search.followers);
  const username = useSelector((state) => state.search.login);

  let { login } = params;
  let user = users.find((item) => item.login === login);

  if (user === undefined) {
    user = followers[username].find((item) => item.login === login);
  }

  return (
    <Flex>
      <Div>
        <Img src={user.avatar_url} />
      </Div>
      <Div>Login: {user.login}</Div>
      <Div>Id: {user.id}</Div>
    </Flex>
  );
};

export default Profile;
