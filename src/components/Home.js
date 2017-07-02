import React from "react";
import StudentList from "./common/StudentList";

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <StudentList/>
      </div>
    );
  }
}