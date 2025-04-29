const express = require("express");
const app = express();
const dbconnect = require("./src/config/dbconnection");
const userroute = require("./src/routes/user.routes");
const cors = require("cors");
// use is a middleware key
app.use(express.json());
app.use(cors("*"));

dbconnect();

app.use("/user", userroute);

const port = 5000;

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
