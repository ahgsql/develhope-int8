const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./utils/db");
require("./utils/passport");
const planetsRouter = require("./routers/planets");
const usersRouter = require("./routers/users");

const PORT = parseInt(process.env.PORT) || 5000;
app.set("db", db);
app.use(express.json());

app.use("/api/planets", planetsRouter);
app.use("/users", usersRouter);
app.listen(PORT, async () => {
  console.log("Server Is Running on port " + PORT);
});
