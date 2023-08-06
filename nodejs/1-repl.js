const crypto = require("crypto");

const cryptoMethods = Object.keys(crypto);

console.log(cryptoMethods);
crypto.randomBytes(10, (err, buffer) => {
  const randomID = buffer.toString("hex");
  console.log("Random ID:", randomID);
});
