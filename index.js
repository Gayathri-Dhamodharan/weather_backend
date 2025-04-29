const express = require("express");
const app = express();
const dbconnect = require("./src/config/dbconnection");
const userroute = require("./src/routes/user.routes");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

// use is a middleware key
app.use(express.json());
app.use(cors("*"));

dbconnect();

app.get("/", (req, res) => {
  res.send("Hello!");
});
app.use("/user", userroute);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
