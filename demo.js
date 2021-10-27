class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

// Usage:
let user = new User("Tuan");
user.setName("Tuan 2")
//   user.sayHi();
console.log(user.getName());
let Tai = new User();
Tai = {...User}
console.log(Tai.getName());
console.log(Tai);
