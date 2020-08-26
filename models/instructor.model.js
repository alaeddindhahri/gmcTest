const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const instructorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    subscriptionDate: {
      type: Date,
      // required: true,
      default: Date(),
    },
    timeTable: {
      type: String,
      required: true,
      trim: true,
    },
    numberOfTracks: {
      type: Number,
      required: true,
    },
  },
  { collection: "instructors" }
);

module.exports = contactForm = mongoose.model("instructors", instructorSchema);
