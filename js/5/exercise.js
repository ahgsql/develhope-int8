const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";
console.log(person1);
console.log(person2);

//Object assigment is only for reference. We can use Object.assign for creating totally different object.
