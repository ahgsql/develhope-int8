class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(fname) {
    this._firstName = fname;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(lname) {
    this._lastName = lname;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName());

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName());
person2 = new Person("ali", "haydar", 10);
person2.age = 13;
console.log(person2);
