function sum(...nums) {
  return nums.reduce((accumulator, current) => accumulator + current, 0);
}
const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));
