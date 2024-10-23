//**  1-Hotel Booking System Api

const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const morgan = require("morgan");

const dbConnection = require("./config/database");
const userRoutes = require("./Routers/userRoutes");

//Connection with db
dbConnection();

const app = express();

//Middlware
app.use(express.json());

if (process.env.MODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`Mode: ${process.env.MODE_ENV}`);
}

//mount Routes
app.use("/api/v1/users", userRoutes);

app.all("*", (req, res, next) => {
  const err = new Error(`Can't find this route:${req.originalUrl}`);
  next(err.message);
});

//Global error handling middlware
app.use((err, req, res, next) => {
  res.status(400).json({ err });
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`App Running on Port ${port}`);
});
