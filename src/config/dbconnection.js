const mongoose = require("mongoose");

const dbconnection = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);

    console.log("db connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbconnection;
