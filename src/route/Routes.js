import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MainLayout from "../component/layouts/MainLayout.js";
import User from "../container/User.js";
import InsertData from "../container/InsertData.js";
import UpdateEmp from "../container/UpdateEmp.js";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/users" />} />
            <Route exact path="/users" component={User} />
            <Route exact path="/insert" component={InsertData} />
            <Route exact path="/update/:id" component={UpdateEmp} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}
export default Routes;
