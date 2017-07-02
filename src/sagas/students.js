import {call, put} from "redux-saga/effects";
import ApiStudents from "../api/students";

// fetch the student's list
export function * studentsFetchList(action) {
  // call the api to get the students list
  const students = yield call(ApiStudents.getList);

  // save the students in state
  yield put({type: 'STUDENTS_LIST_SAVE', students: students});
}

// add/edit a student
export function * studentsAddEdit(action) {
  // call the api to add/edit the student
  yield call(ApiStudents.addEdit);
  // return action.callbackError("Some error");   // show an error when the API
  // fails update the state by adding/editing the student
  yield put({
    type: action.student.id
      ? 'STUDENTS_EDIT_SAVE'
      : 'STUDENTS_ADD_SAVE',
    student: action.student
  });

  // success
  action.callbackSuccess();
}

// delete a student
export function * studentsDelete(action) {
  // call the api to delete the student
  yield call(ApiStudents.delete);

  // update the state by removing the student
  yield put({type: 'STUDENTS_DELETE_SAVE', student_id: action.student_id});
}
