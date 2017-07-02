import {takeLatest} from "redux-saga";
import {fork} from "redux-saga/effects";
import {studentsFetchList, studentsAddEdit, studentsDelete} from "./students";

// main saga generators
export function * sagas() {
  yield[fork(takeLatest, 'STUDENTS_FETCH_LIST', studentsFetchList),
    fork(takeLatest, 'STUDENTS_ADD_EDIT', studentsAddEdit),
    fork(takeLatest, 'STUDENTS_DELETE', studentsDelete)];
}
