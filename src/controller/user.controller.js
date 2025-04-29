const userModel = require("../models/user.model");

const userControl = async (req, res) => {
  try {
    // const { city, temperature, latitude, longitude } = req.body;
    // const  bodyData = {
    //     city :"chennai",
    //     ...req.body
    // }

    const userData = req.body;
    if (!userData) {
      return res.status(402).json({ message: "data not found " });
    }
    const createUserData = await userModel.create(userData);

    res.status(200).json({ message: "Data created Success" }, createUserData);
  } catch (error) {
    console.log(error);
  }
};

const getControl = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};
module.exports = { userControl, getControl };
