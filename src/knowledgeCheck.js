import { roles, users } from './arrays.js';

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

class Admin {
  constructor(user) {
    this.id = user.id;
    this.userName = user.userName;
    this.email = user.email;
    this.role = user.role;
  }
}

class Student {
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

class Teacher {
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

addRole(users, roles);

const admin = new Admin(users[1]);
console.log(admin);

const teacher = new Teacher(users[3]);
console.log(teacher.getStudent);

const student = new Student(users[5]);
console.log(student.getTeachers);
