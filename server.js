import express from "express";
import mongoose from "mongoose";
import { PORT, MongoDBConnection } from "./config.js";
const app = express();

app.get("/", (request, response) => {
  return response
    .status(200)
    .send({ status: 200, message: "This is home route" });
});

mongoose
  .connect(MongoDBConnection)
  .then(() => {
    console.log("App connected to the database");
    app.listen(5000, () => {
      console.log(`App is listening to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("DB connection error --> ", error);
  });
