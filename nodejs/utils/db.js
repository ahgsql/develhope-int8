const pg = require("pg-promise")();
const db = pg("postgresql://postgres:12345qwe@localhost:5432/planets");

const setupdb = async function () {
  let res = await db.none(
    `DROP TABLE IF EXISTS planets;
      CREATE TABLE IF NOT EXISTS planets(
        id SERIAL NOT NULL PRIMARY KEY,
        name TEXT NOT NULL,
        image TEXT
      );`
  );
  await db.none(`INSERT INTO planets(name) VALUES ($1)`, "Earth");
  await db.none(`INSERT INTO planets(name) VALUES ($1)`, "Saturn");
  let usersTable = await db.none(`DROP TABLE IF EXISTS users;
  
    CREATE TABLE users (
      id SERIAL NOT NULL PRIMARY KEY,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      token TEXT
    );
    `);
  await db.none(`INSERT INTO users(username,password) VALUES ($1,$2)`, [
    "ali",
    "123",
  ]);
};
setupdb();
module.exports = db;
