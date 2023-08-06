const express = require("express");
const app = express();
require("dotenv").config();
const PORT = parseInt(process.env.PORT) || 5000;
app.use(express.json());

let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

const logger = (req, res, next) => {
  console.log(`Received ${req.method} request from ${req.ip} to ${req.url}`);
  console.log("Request body:", req.body);
  next(); // Pass control to the next middleware or route handler
};
app.use(logger);
app.listen(PORT, () => {
  console.log("Server Is Running on port " + PORT);
});
