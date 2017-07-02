import {call, put} from "redux-saga/effects";
import assert from "assert";
import {studentsFetchList, studentsAddEdit, studentsDelete} from "../../src/sagas/students";
import ApiStudents from "../../src/api/students";

// unit tests for the students saga
describe('Students saga', () => {
  describe('studentsFetchList()', () => {
    const generator = studentsFetchList();

    it('should return the ApiStudents.getList call', () => {
      assert.deepEqual(generator.next().value, call(ApiStudents.getList));
    });

    it('should return the STUDENTS_LIST_SAVE action', () => {
      assert.deepEqual(generator.next().value, put({type: 'STUDENTS_LIST_SAVE', students: undefined}));
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });

  describe('studentsAddEdit() - add', () => {
    const action = {
      student: {},
      callbackSuccess: () => {}
    };
    const generator = studentsAddEdit(action);

    it('should return the ApiStudents.addEdit call', () => {
      assert.deepEqual(generator.next().value, call(ApiStudents.addEdit));
    });

    it('should return the STUDENTS_ADD_SAVE action', () => {
      assert.deepEqual(generator.next().value, put({type: 'STUDENTS_ADD_SAVE', student: action.student}));
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });

  describe('studentsAddEdit() - edit', () => {
    const action = {
      student: {
        id: 1
      },
      callbackSuccess: () => {}
    };
    const generator = studentsAddEdit(action);

    it('should return the ApiStudents.addEdit call', () => {
      assert.deepEqual(generator.next().value, call(ApiStudents.addEdit));
    });

    it('should return the STUDENTS_EDIT_SAVE action', () => {
      assert.deepEqual(generator.next().value, put({type: 'STUDENTS_EDIT_SAVE', student: action.student}));
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });

  describe('studentsDelete()', () => {
    const action = {
      student_id: 1
    };
    const generator = studentsDelete(action);

    it('should return the ApiStudents.delete call', () => {
      assert.deepEqual(generator.next().value, call(ApiStudents.delete));
    });

    it('should return the STUDENTS_DELETE_SAVE action', () => {
      assert.deepEqual(generator.next().value, put({type: 'STUDENTS_DELETE_SAVE', student_id: action.student_id}));
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });
});
