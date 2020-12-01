import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUsers } from "./../../redux/searchReducer/actions";
import { Button, Div, Flex, Input, Img } from "./Styles";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.search.users);
  const history = useHistory();

  const handleSearch = () => {
    const payload = {
      query: query,
    };
    dispatch(getUsers(payload));
  };

  return (
    <>
      <Flex>
        <Input value={query} onChange={(e) => setQuery(e.target.value)} />
        <Button onClick={handleSearch}>Search</Button>
      </Flex>
      {users.length !== 0 &&
        users.map((user) => (
            <Flex key={user.login}>
              <Div>
                <Img src={user.avatar_url} />
              </Div>
              <Div>
                  <Button onClick={() => history.push(`/${user.login}`)}>View</Button>
                  <Button onClick={() => history.push(`/${user.login}/followers`)}>Followers</Button>
              </Div>
            </Flex>
        ))}
    </>
  );
};

export default Dashboard;
