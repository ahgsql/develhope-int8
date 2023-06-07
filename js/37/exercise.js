const number = 15;

const longTask = function (num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("Resolved");
    } else {
      reject("Rejected");
    }
  });
};

longTask(number)
  .then((e) => console.log(e))
  .catch((r) => console.error(r));
