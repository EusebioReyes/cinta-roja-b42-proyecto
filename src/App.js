import React from 'react';
import Home from "./views/Home"
import AddNote from "./views/AddNote"
import Search from "./views/Search"
import Edit from "./views/Edit"
import Error404 from "./views/Error404"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route exact path = "/note/add">
          <AddNote></AddNote>
        </Route>
        <Route exact path = "/note">
          <Edit></Edit>
        </Route>
        <Route exact path = "/search">
          <Search></Search>
        </Route>
        <Route exact path = "*">
          <Error404></Error404>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
