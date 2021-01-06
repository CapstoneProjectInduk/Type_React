import { gql, useQuery } from "@apollo/client";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { cache } from "./apollo/client";
import { Auth, Feed } from "./pages";

const LoginRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Feed} />
      </Switch>
    </BrowserRouter>
  );
};

const LogoutRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};
export const IS_LOGIN = gql`
  {
    isLogin @client
  }
`;

type IsLogin = {
  isLogin: boolean;
};

const Routes = () => {
  const { isLogin } = cache.readQuery({
    query: IS_LOGIN,
  }) as IsLogin;
  //Routes는 페이지의 경로를 설정하는 컴포넌트
  return true ? <LoginRoute /> : <LogoutRoute />;
};

export default Routes;
