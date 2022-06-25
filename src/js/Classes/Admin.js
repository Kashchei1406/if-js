export default class Admin {
  constructor(user) {
    this.id = user.id;
    this.userName = user.userName;
    this.email = user.email;
    this.role = user.role;
  }
}
