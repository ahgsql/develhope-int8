const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};
Object.keys(person).forEach((p) => console.log(p, " \t: ", person[p]));
