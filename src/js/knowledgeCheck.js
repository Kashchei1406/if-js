import { roles, users } from './arrays.js';
import Student from './Classes/Student.js';
import Teacher from './Classes/Teacher.js';
import Admin from './Classes/Admin.js';

const addRole = (usersArr, rolesArr) => {
  usersArr.forEach((user) => {
    user.role.toLowerCase();

    for (const role of rolesArr) {
      if (user.role === role.name) {
        user.role = role;
      }
    }
  });
};

addRole(users, roles);

const admin = new Admin(users[1]);
console.log(admin);

const teacher = new Teacher(users[3]);
console.log(teacher.getStudent);

const student = new Student(users[5]);
console.log(student.getTeachers);
