import React from "react";
import {connect} from "react-redux";
import {ProgressBar} from "react-bootstrap";
import Menu from "./common/Menu";
import "../stylesheets/main.scss";

// App component
export class App extends React.Component {
  // pre-render logic
  componentWillMount() {
    // the first time we load the app, we need that students list
    this
      .props
      .dispatch({type: 'STUDENTS_FETCH_LIST'});
  }

  // render
  render() {
    // show the loading state while we wait for the app to load
    const {students, children} = this.props;
    if (!students.length) {
      return (<ProgressBar active now={100}/>);
    }

    // render
    return (
      <div className="container">
        <div>
          <Menu/>
        </div>
        <div>
          {children}
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    students: state.students || []
  };
}
export default connect(mapStateToProps)(App);
