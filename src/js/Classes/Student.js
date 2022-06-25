/* eslint-disable */
import Teacher from 'Teacher.js';
/* eslint-enable */
import { users } from '../arrays.js';

export default class Student {
  constructor(user) {
    this.id = user.id;
    this.userName = user.userName;
    this.email = user.email;
    this.role = user.role;
    this.teachersIds = user.teachers;
  }

  get getTeachers() {
    const teachers = [];

    for (let i = 0; i < this.teachersIds.length; i += 1) {
      const teacherId = this.teachersIds[i];

      for (const user of users) {
        const userId = user.id;
        if (teacherId === userId) {
          teachers.push(new Teacher(user));
        }
      }
    }

    return teachers;
  }
}
