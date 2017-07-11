import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/App";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import ManageCourse from "./components/Courses/ManageCourse";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="courses" component={Courses} />
    <Route path="course/:id" component={ManageCourse} />
    <Route path="about" component={About} />
  </Route>
);
