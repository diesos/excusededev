const express = require("express");
const app = express();

const cors = require("cors");
const PORT = 8000;


app.use(cors)
app.get('/', (req, res) => {
	res.send("Hello world")})

app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`);
});
