// student reducer
export default function students(state = {}, action) {
  switch (action.type) {
    case 'STUDENTS_LIST_SAVE':
      return action.students;

    case 'STUDENTS_ADD_SAVE':
      const student = action.student;
      student.id = student.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      return [
        ...state,
        student
      ];

    case 'STUDENTS_EDIT_SAVE':
      return state.map(student => Number(student.id) === Number(action.student.id)
        ? {
          ...action.student
        }
        : student);

    case 'STUDENTS_DELETE_SAVE':
      return state.filter(student => Number(student.id) !== Number(action.student_id));

      // initial state
    default:
      return state;
  }
}