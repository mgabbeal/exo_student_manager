import React, {PropTypes} from "react";
import {Link} from "react-router";
import {Button, Glyphicon} from "react-bootstrap";

// Student List Element component
export default class StudentListElement extends React.Component {
  // render
  render() {
    const {student, showDelete} = this.props;
    return (
      <tr>
        <td>{student.id}</td>
        <td>{student.firstName}</td>
        <td>{student.lastName}</td>
        <td>
          <Link to={'student-edit/' + student.id}>
            <Button bsSize="xsmall" className="btn-warning">
              Edit <span></span>
              <Glyphicon glyph="edit"/>
            </Button>
          </Link>
        </td>
        <td>
          <Button
            bsSize="xsmall"
            className="btn-danger"
            onClick={() => showDelete(student)}>
            Delete <span></span>
            <Glyphicon glyph="remove-circle"/>
          </Button>
        </td>
      </tr>
    );
  }
}

// prop checks
StudentListElement.propTypes = {
  student: PropTypes.object.isRequired,
  showDelete: PropTypes.func.isRequired
}
