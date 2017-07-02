// API Students static class
export default class ApiStudents {
  // get a list of students
  static getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        // build some dummy students list
        let students = [];
        for (let i = 1; i <= 28; i++) {
          students.push({
            id: i,
            firstName: 'GH ' + i,
            lastName: 'Mourad ' + i
          });
        }
        resolve(students);
      }, 1000);
    });
  }

  // add/edit a Student
  static addEdit() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 1000);
    });
  }

  // delete a Student
  static delete() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 500);
    });
  }
}
