const mongoose = require("mongoose");

const dbconnection = () => {
  try {
    mongoose.connect(
      "mongodb+srv://gayathricolan080:gayu7321@cluster0.cm9wwpd.mongodb.net/weatherdb?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("db connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbconnection;
