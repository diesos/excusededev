require('dotenv').config()

const express = require("express");
const app = express();
const mongoose = require('./config/db')
const excuseRoute = require("./routes/excusesRoutes");

const excusesDb = require("./excuses.json");
const cors = require("cors");
const corsOption = require("./config/corsOption")
const PORT = process.env.PORT ||8080;

app.use(express.json());
app.use(cors(corsOption));
app.use("/excuse", excuseRoute);


app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
