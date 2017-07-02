import assert from "assert";
import students from "../../src/reducers/students";

// unit tests for the students reducers mocha -
// http://mochajs.org/#getting-started assert -
// https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_me
// s sage
describe('Students reducer', () => {
  describe('STUDENTS_LIST_SAVE', () => {
    it('should return a list of students', () => {
      assert.deepEqual(students({}, {
        type: 'STUDENTS_LIST_SAVE',
        students: [
          {
            id: 1,
            firstName: 'Some name',
            lastName: 'Some name'
          }
        ]
      }), [
        {
          id: 1,
          firstName: 'Some name',
          lastName: 'Some name'
        }
      ]);
    });
  });

  describe('STUDENTS_ADD_SAVE', () => {
    it('should return a new student array element', () => {
      assert.deepEqual(students([
        {
          id: 1,
          firstName: 'Some name',
          lastName: 'Some name'
        }
      ], {
        type: 'STUDENTS_ADD_SAVE',
        student: {
          id: 2,
          firstName: 'Some name',
          lastName: 'Some name'
        }
      }), [
        {
          id: 1,
          firstName: 'Some name',
          lastName: 'Some name'
        }, {
          id: 2,
          firstName: 'Some name',
          lastName: 'Some name'
        }
      ]);
    });
  });

  describe('STUDENTS_EDIT_SAVE', () => {
    it('should return an edited student array element', () => {
      assert.deepEqual(students([
        {
          id: 1,
          firstName: 'Some name',
          lastName: 'Some name'
        }, {
          id: 2,
          firstName: 'Some name',
          lastName: 'Some name'
        }
      ], {
        type: 'STUDENTS_EDIT_SAVE',
        student: {
          id: 2,
          firstName: 'Some name',
          lastName: 'Some name'
        }
      }), [
        {
          id: 1,
          firstName: 'Some name',
          lastName: 'Some name'
        }, {
          id: 2,
          firstName: 'Some name',
          lastName: 'Some name'
        }
      ]);
    });
  });

  describe('STUDENTS_DELETE_SAVE', () => {
    it('should return the student array without the deleted element', () => {
      assert.deepEqual(students([
        {
          id: 1,
          firstName: 'Some name',
          lastName: 'Some name'
        }, {
          id: 2,
          firstName: 'Some name',
          lastName: 'Some name'
        }
      ], {
        type: 'STUDENTS_DELETE_SAVE',
        student_id: 2
      }), [
        {
          id: 1,
          firstName: 'Some name',
          lastName: 'Some name'
        }
      ]);
    });
  });
});
