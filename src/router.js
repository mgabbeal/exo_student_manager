import React from "react";
import {Router, Route, IndexRoute} from "react-router";
import {history} from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import StudentEdit from "./components/StudentEdit";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="student-edit(/:id)" component={StudentEdit}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export {router};
