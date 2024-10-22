const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const morgan = require("morgan");
const cors = require("cors");

const dbConnection = require("./config/database");
const userRoutes = require("./Routers/userRoutes");

//Connection with db
dbConnection();

const app = express();

//Middlware
app.use(express.json());
app.use(cors());

if (process.env.MODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`Mode: ${process.env.MODE_ENV}`);
}

//mount Routes
app.use("/api/v1/users", userRoutes);

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`App Running on Port ${port}`);
});
