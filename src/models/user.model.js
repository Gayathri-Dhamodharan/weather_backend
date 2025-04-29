const mongoose = require("mongoose");
const { v4 } = require("uuid");

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, default: v4 },
    city: { type: String },
    temperature: { type: String },
    latitude: { type: String },
    longitude: { type: String },
    time_spent: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("search_history", userSchema);
