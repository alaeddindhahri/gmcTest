const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const instructorRouter = require("./routes/instructor");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

// connecting to DB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// http request middlewares
app.use("/api/instructors", instructorRouter);

// starting server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
