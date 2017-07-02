import React from "react";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import {Table, Pagination} from "react-bootstrap";
import StudentListElement from "./StudentListElement";
import StudentDeletePrompt from "./StudentDeletePrompt";

// Student list component
export class StudentList extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // default ui local state
    this.state = {
      delete_show: false,
      delete_student: {}
    };

    // bind <this> to the event method
    this.changePage = this
      .changePage
      .bind(this);
    this.showDelete = this
      .showDelete
      .bind(this);
    this.hideDelete = this
      .hideDelete
      .bind(this);
    this.studentDelete = this
      .studentDelete
      .bind(this);
  }

  // render
  render() {
    // pagination
    const {students, page} = this.props;
    const per_page = 10;
    const pages = Math.ceil(students.length / per_page);
    const start_offset = (page - 1) * per_page;
    let start_count = 0;

    // show the list of students
    return (
      <div>
        <Table bordered hover responsive striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => {
              if (index >= start_offset && start_count < per_page) {
                start_count++;
                return (<StudentListElement key={index} student={student} showDelete={this.showDelete}/>);
              }
            })}
          </tbody>
        </Table>

        <Pagination
          className="students-pagination pull-right"
          bsSize="medium"
          maxButtons={10}
          first
          last
          next
          prev
          boundaryLinks
          items={pages}
          activePage={page}
          onSelect={this.changePage}/>

        <StudentDeletePrompt
          show={this.state.delete_show}
          student={this.state.delete_student}
          hideDelete={this.hideDelete}
          studentDelete={this.studentDelete}/>
      </div>
    );
  }

  // change the student lists' current page
  changePage(page) {
    this
      .props
      .dispatch(push('/?page=' + page));
  }

  // show the delete student prompt
  showDelete(student) {
    // change the local ui state
    this.setState({delete_show: true, delete_student: student});
  }

  // hide the delete student prompt
  hideDelete() {
    // change the local ui state
    this.setState({delete_show: false, delete_student: {}});
  }

  // delete the student
  studentDelete() {
    // delete the student
    this
      .props
      .dispatch({type: 'STUDENTS_DELETE', student_id: this.state.delete_student.id});

    // hide the prompt
    this.hideDelete();
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    students: state.students,

    // https://github.com/reactjs/react-router-redux#how-do-i-access-router-state-in
    // -a-container-component react-router-redux wants you to get the url data by
    // passing the props through a million components instead of reading it directly
    // from the state, which is basically why you store the url data in the state
    // (to have access to it)
    page: Number(state.routing.locationBeforeTransitions.query.page) || 1
  };
}
export default connect(mapStateToProps)(StudentList);
