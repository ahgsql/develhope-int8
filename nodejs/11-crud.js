const express = require("express");
const app = express();
require("dotenv").config();
const Joi = require("joi");

const PORT = parseInt(process.env.PORT) || 5000;
const planetSchema = Joi.object({
  id: Joi.number().integer().min(1).max(9999).required(),

  name: Joi.string().min(1).max(40),
});

app.use(express.json());
const router = express.Router();

router.get("/", (req, res) => {
  res.json(planets);
});
router.get("/:id", (req, res) => {
  let planet = planets.filter((p) => p.id == req.params.id);
  res.json(planet);
});
router.post("/", (req, res) => {
  let { id, name } = req.body;
  let validate = planetSchema.validate({ id, name });
  const { value, error } = validate;
  const valid = error == null;
  if (!valid) {
    res.status(422).json({
      message: "Invalid request",
      data: error.message,
    });
  } else {
    planets.push(value);
    res.status(201).json({ message: "Planet created", data: value });
  }
});
router.put("/:id", (req, res) => {
  let { name } = req.body;
  let validate = planetSchema.validate({ id: req.params.id, name });
  const { value, error } = validate;
  const valid = error == null;
  if (!valid) {
    res.status(422).json({
      message: "Invalid request",
      data: error.message,
    });
  } else {
    let indexOfPlanet = planets.findIndex((p) => p.id == req.params.id);
    planets[indexOfPlanet].name = value.name;
    res
      .status(201)
      .json({ message: "Planet Updated", data: planets[indexOfPlanet] });
  }
});
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  planets = planets.filter((p) => p.id != id);
  res.status(201).json({ message: "Planet Removed", newdata: planets });
});

app.use("/api/planets", router);
app.listen(PORT, () => {
  console.log("Server Is Running on port " + PORT);
});
