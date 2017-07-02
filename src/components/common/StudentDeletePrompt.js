import React, {PropTypes} from "react";
import {Modal, Button} from "react-bootstrap";

// Student delete component
export default class StudentDeletePrompt extends React.Component {
  // render
  render() {
    const {show, student, hideDelete, studentDelete} = this.props;
    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>
            Are you sure you want to delete
            <strong>{student.nom}</strong>?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={hideDelete}>No</Button>
          <Button bsStyle="primary" onClick={studentDelete}>Yes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

// prop checks
StudentDeletePrompt.propTypes = {
  show: PropTypes.bool.isRequired,
  student: PropTypes.object.isRequired,
  hideDelete: PropTypes.func.isRequired,
  studentDelete: PropTypes.func.isRequired
}
