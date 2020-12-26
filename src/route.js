import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Auth } from "./pages";

const Routes = () => {
  //Routes는 페이지의 경로를 설정하는 컴포넌트
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/auth" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
