const express = require("express");
const app = express();
const excuseRoute = require("./routes/excusesRoutes");

const excusesDb = require("./excuses.json");
const cors = require("cors");
const corsOption = require("./config/corsOption")
const PORT = 8000;

app.use(cors(corsOption));
app.use("/excuse", excuseRoute);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
