import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../components/Home";
import Items from "./Items";
import Item from "./Item";
import Register from "../../components/Register";
import Login from "../../components/Login";
import AddItem from "../AddItem";


const Main = props => (
  <main className="page-content">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/items/:id" component={Item} />
      <Route exact path="/items" component={Items} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/users" component={Login} /> */}
      <Route exact path="/addItem" component={AddItem} />
    </Switch>
  </main>
);
export default Main;
