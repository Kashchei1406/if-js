import Student from './Student.js';
import { users } from '../arrays.js';

export default class Teacher {
  constructor(user) {
    this.id = user.id;
    this.userName = user.userName;
    this.email = user.email;
    this.role = user.role;
    this.studentIds = user.students;
  }

  get getStudent() {
    const students = [];

    for (let i = 0; i < this.studentIds.length; i += 1) {
      const studentId = this.studentIds[i];

      for (const user of users) {
        if (user.id === studentId) {
          students.push(new Student(user));
        }
      }
    }

    return students;
  }
}
